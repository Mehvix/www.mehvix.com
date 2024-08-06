document.addEventListener('DOMContentLoaded', function () {
    const footnotes = document.querySelectorAll('.footnote');
    let activeFootnote = null;
    let activeContainer = null;
    let isClicked = false;

    function createFootnoteContainer(footnote) {
        const container = document.createElement('div');
        container.className = 'footnote-container';
        container.innerHTML = footnote.getAttribute('data-footnote');

        const customStyles = footnote.getAttribute('style-footnote');
        if (customStyles)
            container.style.cssText = customStyles;

        document.body.appendChild(container);
        return container;
    }

    function positionFootnote(footnote, container) {
        const rect = footnote.getBoundingClientRect();
        const containerWidth = parseInt(window.getComputedStyle(container).getPropertyValue('max-width'), 10);
        let windowWidth = window.innerWidth;

        if (window.innerWidth > document.documentElement.clientWidth)
            windowWidth -= window.innerWidth - document.documentElement.clientWidth + 10;

        const margin = 16; // 1rem

        let left = rect.left + window.scrollX;
        if (left + containerWidth + margin > windowWidth) {
            left = windowWidth - containerWidth - margin;
        }

        container.style.left = `${Math.max(margin, left)}px`;
        container.style.top = `${rect.bottom + window.scrollY + 1}px`;
    }

    function showFootnote(footnote, container) {
        positionFootnote(footnote, container);
        container.classList.add('active');

        if (window.MathJax)
            MathJax.typesetPromise([container]).catch((err) => console.log('MathJax error:', err));

        activeFootnote = footnote;
        activeContainer = container;
    }

    function hideActiveFootnote() {
        if (activeContainer) {
            activeContainer.classList.remove('active');
            activeFootnote = null;
            activeContainer = null;
            isClicked = false;
        }
    }

    function handleMouseEnter(event) {
        const footnote = event.target;
        let container = footnote.footnoteContainer;

        if (!container) {
            container = createFootnoteContainer(footnote);
            footnote.footnoteContainer = container;
        }

        showFootnote(footnote, container);
    }

    function handleMouseLeave(event) {
        if (!isClicked) {
            const relatedTarget = event.relatedTarget;
            if (!relatedTarget || !activeContainer || !activeContainer.contains(relatedTarget)) {
                hideActiveFootnote();
            }
        }
    }

    function handleClick(event) {
        event.stopPropagation();

        const footnote = event.target;
        let container = footnote.footnoteContainer;

        if (!container) {
            container = createFootnoteContainer(footnote);
            footnote.footnoteContainer = container;
        }

        if (activeFootnote === footnote && isClicked) {
            hideActiveFootnote();
        } else {
            if (activeContainer) { hideActiveFootnote(); }
            showFootnote(footnote, container);
            isClicked = true;
        }
    }

    footnotes.forEach(footnote => {
        footnote.addEventListener('mouseenter', handleMouseEnter);
        footnote.addEventListener('mouseleave', handleMouseLeave);
        footnote.addEventListener('click', handleClick);

        footnote.addEventListener('touchstart', function (e) {
            e.preventDefault();
            handleClick(e);
        });
    });

    document.addEventListener('mouseover', function(e) {
        if (activeContainer && (e.target === activeContainer || activeContainer.contains(e.target))) {
            clearTimeout(activeContainer.hideTimeout);
        }
    });

    document.addEventListener('mouseout', function(e) {
        if (activeContainer && !isClicked) {
            const relatedTarget = e.relatedTarget;
            if (!relatedTarget || (!activeContainer.contains(relatedTarget) && !activeFootnote.contains(relatedTarget))) {
                activeContainer.hideTimeout = setTimeout(hideActiveFootnote, 100);
            }
        }
    });

    document.addEventListener('click', function (e) {
        if (!e.target.classList.contains('footnote') &&
            activeContainer &&
            !activeContainer.contains(e.target)) {
            hideActiveFootnote();
        }
    });

    // Handle window resize and zoom
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if (activeFootnote && activeContainer) {
                positionFootnote(activeFootnote, activeContainer);
            }
        }, 100);
    });
});
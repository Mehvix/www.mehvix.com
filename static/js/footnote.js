document.addEventListener('DOMContentLoaded', function () {
    const footnotes = document.querySelectorAll('.footnote');
    let activeFootnote = null;
    let activeContainer = null;
    let isClicked = false;

    function createFootnoteContainer(footnote) {
        const container = document.createElement('div');
        container.className = 'footnote-container';
        container.innerHTML = footnote.getAttribute('data-footnote');
        container.style.cssText = footnote.getAttribute('style-footnote') || '';
        document.body.appendChild(container);
        return container;
    }

    function positionFootnote(footnote, container) {
        const rect = footnote.getBoundingClientRect();
        const windowWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
        const containerWidth = parseInt(window.getComputedStyle(container).getPropertyValue('max-width'), 10);
        const margin = 16;

        const left = Math.max(margin, Math.min(rect.left, windowWidth - containerWidth - margin));
        container.style.left = `${left}px`;
        container.style.top = `${rect.bottom + window.scrollY + 1}px`;
    }

    function showFootnote(footnote, container) {
        positionFootnote(footnote, container);
        container.classList.add('active');
        activeFootnote = footnote;
        activeContainer = container;

        if (window.MathJax)
            window.MathJax.typesetPromise([container]).catch((err) => console.log('MathJax error:', err));
    }

    function hideActiveFootnote() {
        if (activeContainer) {
            activeContainer.classList.remove('active');
            activeFootnote = null;
            activeContainer = null;
            isClicked = false;
        }
    }

    function handleInteraction(event, isMouseEnter) {
        const footnote = event.target;
        let container = footnote.footnoteContainer;

        if (!container) {
            container = createFootnoteContainer(footnote);
            footnote.footnoteContainer = container;
        }

        if (isMouseEnter) {
            showFootnote(footnote, container);
        } else if (!isClicked) {
            const relatedTarget = event.relatedTarget;
            if (!relatedTarget || !activeContainer || !activeContainer.contains(relatedTarget)) {
                hideActiveFootnote();
            }
        }
    }

    function handleClick(event) {
        event.stopPropagation();
        const footnote = event.target;
        const container = footnote.footnoteContainer || createFootnoteContainer(footnote);

        if (activeFootnote === footnote && isClicked) {
            hideActiveFootnote();
        } else {
            if (activeContainer) hideActiveFootnote();
            showFootnote(footnote, container);
            isClicked = true;
        }
    }

    footnotes.forEach(footnote => {
        footnote.addEventListener('mouseenter', (e) => handleInteraction(e, true));
        footnote.addEventListener('mouseleave', (e) => handleInteraction(e, false));
        footnote.addEventListener('click', handleClick);
        footnote.addEventListener('touchstart', (e) => { e.preventDefault(); handleClick(e); });
    });

    document.addEventListener('mouseover', (e) => {
        if (activeContainer && activeContainer.contains(e.target)) {
            clearTimeout(activeContainer.hideTimeout);
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (activeContainer && !isClicked) {
            const relatedTarget = e.relatedTarget;
            if (!relatedTarget || (!activeContainer.contains(relatedTarget) && !activeFootnote.contains(relatedTarget))) {
                activeContainer.hideTimeout = setTimeout(hideActiveFootnote, 100);
            }
        }
    });

    document.addEventListener('click', (e) => {
        if (activeContainer && !e.target.classList.contains('footnote') && !activeContainer.contains(e.target)) {
            hideActiveFootnote();
        }
    });

    window.addEventListener('resize', () => {
        if (activeFootnote && activeContainer) {
            positionFootnote(activeFootnote, activeContainer);
        }
    });
});
// HOW TO USE:
// give element, i.e. <span>, class 'footnote'
// data-footnote attribute will populate the contents


document.addEventListener('DOMContentLoaded', function () {
    const footnotes = document.querySelectorAll('.footnote');
    let activeFootnote = null;
    let activeContainer = null;
    let clickedFootnote = null;
    let clickedContainer = null;

    function getContainer(footnote) {
        if (footnote.footnoteContainer)
            return footnote.footnoteContainer;

        const container = footnote.footnoteContainer = document.createElement('div');
        container.className = 'footnote-container';

        // Check for img-footnote attribute
        const imgFootnote = footnote.getAttribute('img-footnote');
        if (imgFootnote)
            container.innerHTML = `<img src='${imgFootnote}'>`;
        else
            container.innerHTML = footnote.getAttribute('data-footnote');

        container.style.cssText = footnote.getAttribute('style-footnote') || '';
        document.body.appendChild(container);
        return container;
    }

    function initContainers() {
        footnotes.forEach(footnote => { getContainer(footnote); });
    }

    function positionFootnote(footnote, container) {
        const rect = footnote.getBoundingClientRect();
        const containerWidth = parseInt(window.getComputedStyle(container).getPropertyValue('max-width'), 10);
        const windowWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
        const margin = 16;

        const left = Math.max(margin, Math.min(rect.left, windowWidth - containerWidth - margin));
        container.style.left = `${left}px`;
        container.style.top = `${rect.bottom + window.scrollY}px`;
    }

    function showFootnote(footnote, container, isClicked = false) {
        positionFootnote(footnote, container);
        container.classList.add('active');

        if (isClicked) {
            if (clickedContainer && clickedContainer !== container)
                // when clicking new FN, hide the prior
                hideFootnote(clickedContainer);
            clickedFootnote = footnote;
            clickedContainer = container;
            activeFootnote = null;
            activeContainer = null;
        } else {
            activeFootnote = footnote;
            activeContainer = container;
        }

        if (activeContainer && clickedContainer) {
            clickedContainer.style.zIndex = 199;
            activeContainer.style.zIndex = 200;
        }

        if (window.MathJax)
            window.MathJax.typesetPromise([container]).catch((err) => console.log('MathJax error:', err));
    }

    function hideFootnote(container) {
        if (container) container.classList.remove('active');
    }

    function handleInteraction(event, isMouseEnter) {
        const footnote = event.target;
        const container = getContainer(footnote);

        if (isMouseEnter) {
            if (footnote !== clickedFootnote) showFootnote(footnote, container);
        } else {
            const relatedTarget = event.relatedTarget;
            if (!relatedTarget || !container.contains(relatedTarget)) {
                if (footnote !== clickedFootnote) {
                    hideFootnote(container);
                    activeFootnote = null;
                    activeContainer = null;
                }
            }
        }
    }

    function handleClick(event) {
        event.stopPropagation();
        const footnote = event.target;
        const container = getContainer(footnote);

        if (clickedFootnote === footnote) {
            hideFootnote(container);
            clickedFootnote = null;
            clickedContainer = null;
        } else {
            showFootnote(footnote, container, true);
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
        if (activeContainer && activeFootnote !== clickedFootnote) {
            const relatedTarget = e.relatedTarget;
            if (!relatedTarget || (!activeContainer.contains(relatedTarget) && !activeFootnote.contains(relatedTarget))) {
                activeContainer.hideTimeout = setTimeout(() => {
                    hideFootnote(activeContainer);
                    activeFootnote = null;
                    activeContainer = null;
                }, 100);
            }
        }
    });

    document.addEventListener('click', (e) => {
        if (clickedContainer && !e.target.classList.contains('footnote') && !clickedContainer.contains(e.target)) {
            hideFootnote(clickedContainer);
            clickedFootnote = null;
            clickedContainer = null;
        }
    });

    window.addEventListener('resize', () => {
        if (activeFootnote && activeContainer)
            positionFootnote(activeFootnote, activeContainer);
        if (clickedFootnote && clickedContainer)
            positionFootnote(clickedFootnote, clickedContainer);
    });

    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(initContainers);
    } else {
        // fallback if requestIdleCallback unsupported
        setTimeout(initContainers, 100);
    }

});
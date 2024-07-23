document.addEventListener('DOMContentLoaded', function () {
    const footnotes = document.querySelectorAll('.footnote');
    let activeFootnote = null;
    let activeContainer = null;
    let isClicked = false;

    function createFootnoteContainer(footnote) {
        const container = document.createElement('div');
        container.className = 'footnote-container';
        container.innerHTML = footnote.getAttribute('data-footnote');
        document.body.appendChild(container);
        return container;
    }

    function showFootnote(footnote, container) {
        // const rect = footnote.getBoundingClientRect();
        // container.style.left = `${rect.left}px`;
        // container.style.top = `${rect.bottom + window.scrollY + 5}px`;
        // container.classList.add('active');

        // activeFootnote = footnote;
        // activeContainer = container;

        const rect = footnote.getBoundingClientRect();
        const containerWidth = parseInt(window.getComputedStyle(container).getPropertyValue('max-width'), 10);
        const windowWidth = window.innerWidth;
        const margin = 16; // 1rem

        let left = rect.left;
        if (left + containerWidth + margin > windowWidth) {
            left = windowWidth - containerWidth - margin;
        }

        container.style.left = `${Math.max(margin, left)}px`;
        container.style.top = `${rect.bottom + window.scrollY + 5}px`;
        container.classList.add('active');

        if (window.MathJax) {
            MathJax.typesetPromise([container]).catch((err) => console.log('MathJax error:', err));
        }

        activeFootnote = footnote;
        activeContainer = container;
        isClicked = true;
    }

    function hideActiveFootnote() {
        if (activeContainer) {
            activeContainer.classList.remove('active');
            activeFootnote = null;
            activeContainer = null;
            isClicked = false;
        }
    }

    function handleHover(event) {
        if (isClicked)
            return;

        const footnote = event.target;
        let container = footnote.footnoteContainer;

        if (!container) {
            container = createFootnoteContainer(footnote);
            footnote.footnoteContainer = container;
        }

        showFootnote(footnote, container);
        isClicked = false;
    }

    function handleClick(event) {
        event.stopPropagation();

        const footnote = event.target;
        let container = footnote.footnoteContainer;

        if (!container) {
            container = createFootnoteContainer(footnote);
            footnote.footnoteContainer = container;
        }

        if (!(activeFootnote === footnote && isClicked)) {
            if (activeContainer) { hideActiveFootnote(); }
            showFootnote(footnote, container);
        }
    }

    footnotes.forEach(footnote => {
        footnote.addEventListener('mouseover', handleHover);
        footnote.addEventListener('mouseout', function (event) {
            if (!isClicked) { hideActiveFootnote(); }
        });
        footnote.addEventListener('click', handleClick);

        footnote.addEventListener('touchstart', function (e) {
            e.preventDefault();
            handleClick(e);
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.classList.contains('footnote') &&
            activeContainer &&
            !activeContainer.contains(e.target)) {
            hideActiveFootnote();
        }
    });

    // Prevent closing when clicking inside the footnote container
    document.addEventListener('click', function (e) {
        if (activeContainer && activeContainer.contains(e.target)) {
            e.stopPropagation();
        }
    });
});
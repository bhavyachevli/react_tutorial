// Utility to initialize Bootstrap components in React
export const initBootstrap = () => {
    if (typeof window !== 'undefined' && window.bootstrap) {
        // Initialize all dropdowns
        const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
        dropdownElementList.forEach(dropdownToggleEl => {
            // Dispose existing instance if any
            const existingInstance = window.bootstrap.Dropdown.getInstance(dropdownToggleEl);
            if (existingInstance) {
                existingInstance.dispose();
            }
            // Create new instance
            new window.bootstrap.Dropdown(dropdownToggleEl);
        });

        // Initialize collapse (mobile menu) - but don't auto-toggle
        const collapseElementList = document.querySelectorAll('.collapse');
        collapseElementList.forEach(collapseEl => {
            // Only initialize if not already initialized
            if (!window.bootstrap.Collapse.getInstance(collapseEl)) {
                new window.bootstrap.Collapse(collapseEl, { toggle: false });
            }
        });
    }
};

// Wait for Bootstrap to be available
export const waitForBootstrap = (callback, maxAttempts = 10) => {
    let attempts = 0;
    const checkBootstrap = () => {
        if (typeof window !== 'undefined' && window.bootstrap) {
            callback();
        } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(checkBootstrap, 100);
        }
    };
    checkBootstrap();
};


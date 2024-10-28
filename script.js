const drop = document.querySelector('.drop');
        let isMoving = false;

        // Function to update drop position
        function moveDropTo(x, y) {
            const dropRect = drop.getBoundingClientRect();
            const dropWidth = dropRect.width;
            const dropHeight = dropRect.height;
            
            // Center the drop on the cursor
            drop.style.left = `${x - dropWidth/2}px`;
            drop.style.top = `${y - dropHeight/2}px`;
        }

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            isMoving = true;
            
            // Get mouse coordinates
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Use requestAnimationFrame for smooth animation
            requestAnimationFrame(() => {
                moveDropTo(mouseX, mouseY);
            });
        });

        // Optional: Add touch support
        document.addEventListener('touchmove', (e) => {
            isMoving = true;
            
            // Prevent scrolling
            e.preventDefault();
            
            // Get touch coordinates
            const touch = e.touches[0];
            const touchX = touch.clientX;
            const touchY = touch.clientY;

            requestAnimationFrame(() => {
                moveDropTo(touchX, touchY);
            });
        }, { passive: false });

        // Initialize drop position at center of screen
        window.addEventListener('load', () => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            moveDropTo(centerX, centerY);
        });
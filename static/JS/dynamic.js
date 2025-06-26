// Enhanced Navigation Bar with Scroll and Hover Effects
        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.getElementById('navbar');
            let isScrolled = false;
            let scrollTimeout;

            // Handle scroll events
            function handleScroll() {
                const scrollY = window.scrollY;
                
                // Clear existing timeout
                clearTimeout(scrollTimeout);
                
                if (scrollY > 100 && !isScrolled) {
                    // Scrolled down - collapse navbar
                    navbar.classList.add('nav-collapsed');
                    navbar.classList.remove('nav-expanded');
                    isScrolled = true;
                } else if (scrollY <= 100 && isScrolled) {
                    // Scrolled back to top - expand navbar
                    navbar.classList.add('nav-expanded');
                    navbar.classList.remove('nav-collapsed');
                    isScrolled = false;
                }
            }

            // Handle mouse enter on navbar
            function handleMouseEnter() {
                if (isScrolled) {
                    navbar.classList.add('nav-hover');
                }
            }

            // Handle mouse leave on navbar
            function handleMouseLeave() {
                if (isScrolled) {
                    navbar.classList.remove('nav-hover');
                }
            }

            // Throttled scroll event listener
            let scrollThrottle = false;
            window.addEventListener('scroll', function() {
                if (!scrollThrottle) {
                    requestAnimationFrame(function() {
                        handleScroll();
                        scrollThrottle = false;
                    });
                    scrollThrottle = true;
                }
            });

            // Mouse event listeners for navbar
            navbar.addEventListener('mouseenter', handleMouseEnter);
            navbar.addEventListener('mouseleave', handleMouseLeave);

            // Smooth scrolling for anchor links
            const anchorLinks = document.querySelectorAll('a[href^="#"]');
            anchorLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const offsetTop = targetElement.offsetTop - 100; // Account for navbar height
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Initialize navbar state
            navbar.classList.add('nav-expanded');
        });

        // Google Maps initialization
        let map;
        async function initMap() {
            const { Map } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

            // London coordinates
            const position = { lat: 51.5074, lng: -0.1278 };

            map = new Map(document.getElementById("map"), {
                zoom: 10,
                center: position,
                mapId: "DEMO_MAP_ID",
                styles: [
                    {
                        "featureType": "all",
                        "elementType": "geometry.fill",
                        "stylers": [{"color": "#1f2937"}]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{"color": "#3b82f6"}]
                    }
                ]
            });

            const marker = new AdvancedMarkerElement({
                map: map,
                position: position,
                title: "London"
            });
        }

        // Initialize map when the page loads
        window.initMap = initMap;
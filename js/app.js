/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
// Build menu
function handleBuildNav() {
    var Sections = document.querySelectorAll('section');
    var fragment = document.createDocumentFragment();
    var ul = document.querySelector('#navbar__list');
    Sections.forEach(section => {
        var dataNav = section.getAttribute('data-nav').valueOf();
        var a = document.createElement('a');
        a.setAttribute('class', 'menu__link');
        a.setAttribute('id', `${dataNav}`);
        a.textContent = dataNav;
        var li = document.createElement('li');
        li.appendChild(a);
        fragment.appendChild(li);
        // Scroll to section on link click
        a.addEventListener("click", function(e) {
            e.preventDefault();
            section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        });
    });
    ul.append(fragment);


    // Set sections as active
    // Add class 'active' to section when near top of viewport
    window.addEventListener('scroll', () => {
        Sections.forEach(section => {
            var rect = section.getBoundingClientRect().top;
            if (rect < window.innerHeight) {
                function handleActiveSection() {
                    document.querySelectorAll('.your-active-class').forEach(element => {
                        element.classList.remove('your-active-class');
                    });
                    section.classList.add('your-active-class')
                }
                (handleActiveSection());
            }
        });
        // Add class 'active' to Link
        function handleActiveLink() {
            document.querySelectorAll('a').forEach(c => {
                var dataNavsection = document.querySelector('.your-active-class').getAttribute('data-nav').valueOf();
                var dataNavLink = document.getElementById(`${dataNavsection}`);

                if (dataNavsection = dataNavLink) {
                    c.classList.remove('your-active-class2');
                }
                dataNavLink.classList.add('your-active-class2');
            });
        }
        (handleActiveLink());
    });

    // Scroll to anchor ID using scrollTO event
    var navBar = document.querySelector("nav");
    var icon = document.querySelector('i');
    window.addEventListener('load', () => {
        if (pageYOffset == 0) {
            icon.style.display = 'none';
        } else {
            icon.style.display = 'block';
            navBar.style.display = 'block';
        }
        icon.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({ behavior: "smooth", top: "0px", inline: "nearest" });
        });
        this.addEventListener('scroll', () => {
            if (pageYOffset == 0) {
                icon.style.display = 'none';
                navBar.style.display = 'block';
            } else {
                navBar.style.display = 'block';
                icon.style.display = 'block';
                setTimeout(() => {
                    if (pageYOffset == 0) {
                        navBar.style.display = 'block';
                    } else {
                        navBar.style.display = 'none';
                    }
                }, 5000);
            }

        })
    });
    /* window.addEventListener('', () => {
         navBar.style.display = 'block';

         if (pageYOffset == 0) {
             icon.style.display = 'none';
             navBar.style.display = 'block';
         } else {
             icon.style.display = 'block';
         }
         setTimeout(() => {
             navBar.style.display = 'none';
         }, 5000);
     });*/


    /**
     * End Main Functions
     * Begin Events
     * 
     */





}(handleBuildNav());
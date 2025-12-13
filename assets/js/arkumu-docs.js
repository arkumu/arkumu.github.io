/********************************************************************************************************************************/

// Diese Komponente steuert die Offcanvas für das Navigationsmenü und die darin enthaltenen Elemente. //
// This component controls the off-canvas for the navigation menu and the elements it contains. //

document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById('offcanvas-toggle');
  const closeBtn = document.getElementById('offcanvas-close');
  const offcanvas = document.getElementById('offcanvas-container');
  const overlay = document.getElementById('offcanvas-overlay');

  toggle.addEventListener('click', () => {
    offcanvas.style.transform = 'translateX(0)';
  });
  closeBtn.addEventListener('click', () => {
    offcanvas.style.transform = 'translateX(100%)';
  });
  overlay.addEventListener('click', () => {
    offcanvas.style.transform = 'translateX(100%)';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.accordion').forEach(btn => {
    if (btn.dataset.accordionAttached === '1') return;
    const panel = btn.nextElementSibling;
    if (!panel) return;
    if (btn.classList.contains('active')) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
      panel.style.maxHeight = null;
    }

    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      if (panel.style.maxHeight && panel.style.maxHeight !== '0px') {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
    btn.dataset.accordionAttached = '1';
  });
});


/********************************************************************************************************************************/

// Diese Komponente steuert, dass externe Links in einem neuen Tab geöffnet werden. //
// Da interne Links stets über ihren Pfad angegeben werden und nicht "href" benötigen, kann diese Komponiente zwischen internen //
// und externen Links unterscheiden. //
// This component controls that external links are opened in a new tab. //
// Because internal links are referenced by their path, and not use "href", the component can distinguish between internal and //
// external links. //

  window.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a');

    links.forEach(function(link) {
        var href = link.getAttribute('href');
        if (href.startsWith('http://') || href.startsWith('https://')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

/********************************************************************************************************************************/

// Diese Komponente erzeugt die Links für die h2-elemente, die rechts neben der Übershrift erscheinen. //
// This component creates the links for the h2-elements, that are at the right of the heading. //

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('h2').forEach(heading => {
    const headingId = heading.getAttribute('id');
    if (headingId) {
      const linkButton = document.createElement('a');
      linkButton.setAttribute('href', `#${headingId}`);
      linkButton.classList.add('link-symbol');
      linkButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>';
      linkButton.addEventListener('click', (event) => {
        event.preventDefault();
        const url = window.location.href.split('#')[0] + '#' + headingId;
        navigator.clipboard.writeText(url)
          .then(() => {
            console.log('URL copied to clipboard');
          })
          .catch(err => {
            console.error('Failed to copy URL: ', err);
          });
      });
      heading.appendChild(linkButton);
    }
  });
});

/********************************************************************************************************************************/

// Diese Komponente erzeugt die Links für die h3-elemente, die rechts neben der Übershrift erscheinen. //
// This component creates the links for the h3-elements, that are at the right of the heading. //

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('h3').forEach(heading => {
    const headingId = heading.getAttribute('id');
    if (headingId) {
      const linkButton = document.createElement('a');
      linkButton.setAttribute('href', `#${headingId}`);
      linkButton.classList.add('link-symbol');
      linkButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>';
      linkButton.addEventListener('click', (event) => {
        event.preventDefault();
        const url = window.location.href.split('#')[0] + '#' + headingId;
        navigator.clipboard.writeText(url)
          .then(() => {
            console.log('URL copied to clipboard');
          })
          .catch(err => {
            console.error('Failed to copy URL: ', err);
          });
      });
      heading.appendChild(linkButton);
    }
  });
});

/********************************************************************************************************************************/


// Diese Komponente steuert die Sidebar, die wie eine Scrollview an der rechten Seite des Screens fungiert, wenn h2-Überscfriften
// vorhanden sind. //
// This component controls the sidebar that functions as a scroll view at the right side of the screen if h2-headings are on the
// page. //

document.addEventListener('DOMContentLoaded', function () {

    const sidebar = document.getElementById('sidebar');
    const h2_heading = document.querySelectorAll('.post-container-text h2');
    let wormIndicator;

     // Dieser Threshold steuert, wie weit die Überschrift von der oberen Fenterkante entfernt seien muss, damit in der Sidebar zum nächsten
    // Überschrift-Link gesprungen wird.
    // This treshhold controls how for a heading needs to be to the upper window border to let the sidebar move to the next headings link

    const threshold = 110;

    if (h2_heading.length > 0) {
        wormIndicator = document.createElement('div');
        wormIndicator.className = 'worm-indicator';
        sidebar.appendChild(wormIndicator);

        const linksContainer = document.createElement('div');
        linksContainer.className = 'sidebar-links-container';
        sidebar.appendChild(linksContainer);

        h2_heading.forEach(function (heading) {
            const paragraph_link = document.createElement('a');
            paragraph_link.href = `#${heading.id}`;
            paragraph_link.textContent = heading.textContent;
            linksContainer.appendChild(paragraph_link);

            paragraph_link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                targetElement.scrollIntoView({ behavior: 'smooth' }); //Scroll-Effekt | Scroll effect
            });
        });

        window.addEventListener('scroll', function () {
            let nearestHeading = null;
            let nearestDistance = Number.MAX_VALUE;

            h2_heading.forEach(function (heading) {
                const bounding = heading.getBoundingClientRect();
                const distanceToTop = Math.abs(bounding.top);
                if (distanceToTop < nearestDistance && distanceToTop < threshold) {
                    nearestHeading = heading;
                    nearestDistance = distanceToTop;
                }
            });

            if (nearestHeading) {
                setAusgewaehlte_h2_Ueberschrift(nearestHeading);
            }
        });

        window.addEventListener('resize', function () {
            if (wormIndicator) {
                const highlightedLink = sidebar.querySelector('a[style="font-weight: bold;"]');
                if (highlightedLink) {
                    const linkRect = highlightedLink.getBoundingClientRect();
                    wormIndicator.style.top = `${linkRect.top}px`;
                }
            }
        });
    }

    // Styling der wenn nicht ausgewählt
    // Styling if not selected
    function setAusgewaehlte_h2_Ueberschrift(heading) {
        h2_heading.forEach(function (h) {
            const paragraph_link = sidebar.querySelector(`a[href="#${h.id}"]`);
            if (paragraph_link) {
                paragraph_link.style.fontWeight = 'normal';
            }
        });

        // Styling der wenn ausgewählt, samt angepassten Styling for den Worm Indicator
        // Styling if selected, including the style adjustment for the worm indicator
        const paragraph_link = sidebar.querySelector(`a[href="#${heading.id}"]`);
        if (paragraph_link) {
            paragraph_link.style.fontWeight = 'bold';
            const linkRect = paragraph_link.getBoundingClientRect();
            wormIndicator.style.top = `${linkRect.top}px`;
        }
    }
});


/********************************************************************************************************************************/

//Diese Komponente steurt, wie die Tabellen funktionieren //
//This component controls how the tables function //

document.addEventListener("DOMContentLoaded", function() {

    var tables = document.querySelectorAll("table");
    
    tables.forEach(function(table) {
      
        var table_container = document.createElement("div");
        table_container.classList.add("table-container");
        table.parentNode.insertBefore(table_container, table);
        table_container.appendChild(table);
  
      // Style, wenn die Tabelle einen X-Overflow hat //
      // Style if the table has an x-overflow //
      if (table_container.scrollWidth > table_container.clientWidth) {
        table_container.style.cursor = 'grab';
        table_container.style.overflowX = 'scroll';
        table_container.style.border ='none';
      // Style, wenn die Tabelle keinen X-Overflow hat//
      // Style if the table has no x-overflow //
      } else {
        table_container.style.cursor = 'auto';
        table_container.style.overflowX = 'hidden';
        table_container.style.border ='2px solid #e8e8e8';
      }

      // Maussteurung der Tabellen mit  //
      // Mouse controls for the tanbles with x-overflow//
  
      var isDown = false;
      var startX;
      var scrollLeft;
  
      table_container.addEventListener('mousedown', function(e) {
        if (table_container.scrollWidth > table_container.clientWidth) {
          isDown = true;
          startX = e.pageX - table_container.offsetLeft;
          scrollLeft = table_container.scrollLeft;
          table_container.style.cursor = 'grabbing'; // Anzeige des Mauszeigers wenn der Mausbutton gedrückt wird | Display off the mouse cursor when the mouse button is pressed
        }
      });
      table_container.addEventListener('mouseleave', function() {
        isDown = false;
        if (table_container.scrollWidth > table_container.clientWidth) {
          table_container.style.cursor = 'grab'; // Reset zu grab bei Overflow | Reset cursor to grab if overflow
        } else {
          table_container.style.cursor = 'auto'; // Reset zu auto bei keinem Overflow | Reset cursor to auto if no overflow
        }
      });
      table_container.addEventListener('mouseup', function() {
        isDown = false;
        if (table_container.scrollWidth > table_container.clientWidth) {
          table_container.style.cursor = 'grab';
        } else {
          table_container.style.cursor = 'auto';
        }
      });
      table_container.addEventListener('mousemove', function(e) {
        if (!isDown) return;
        e.preventDefault();
        var x = e.pageX - table_container.offsetLeft;
        var walk = (x - startX) * 2; //Scrollgeschwindigkeit | Scroll speed //
        table_container.scrollLeft = scrollLeft - walk;
      });
    });
  });
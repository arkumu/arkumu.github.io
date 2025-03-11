// Diese Komponente öffnet das Mobile Navigations-Menu. Diese Funktion wird aus der default.html heraus aufgerufen. //
// Sie verwendet zum öffnen und schließen des mobilen Menüs die Methode, wie sie auch in der Accordion-Komponente von https://www.w3schools.com/howto/howto_js_accordion.asp zu finden ist. //
// This component opens the mobile navigation menu. This function is called from the default.html. //
// For opening and closing the mobile menu, it uses the method that can be found in the accordion component from https://www.w3schools.com/howto/howto_js_accordion.asp. //

function open_mobile_menu() {

    var mobile_menu = document.getElementById("mobile-menu");
        
    if (mobile_menu.style.display === "block") {
        mobile_menu.style.display = "none";
        } else {
        mobile_menu.style.display = "block";
    }
}

/********************************************************************************************************************************/
  
// Diese Komponente steuert die Expansion Panel aus der mobile-navigation.html im _includes-Ordner. //
// Sie verwendet den Accordion-Code von https://www.w3schools.com/howto/howto_js_accordion.asp, der angepasst wurde, damit er in einer getrennten Komponente laufen kann. //
// This component controls the expansion panels in the mobile-navigation.html in the _includes folder. //
// It uses the accordion code from https://www.w3schools.com/howto/howto_js_accordion.asp, which was adjusted to run in a separate component. //

  document.addEventListener("DOMContentLoaded", function() {
    
  var accordion = document.getElementsByClassName("accordion");
    
  var i;
  
  for (i = 0; i < accordion.length; i++) {
      
      accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
  
        var panel = this.nextElementSibling;
  
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
  
      });
  }
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

/********************************************************************************************************************************/

// Lunar.js-Suche (Desktop) //
// Lunr.js Search (Desktop)//

// Die Suchen auf arkumu-Docs verwenden Lunr.js (https://lunrjs.com/). Lunr.js ist unter der MIT-License veröffentlicht.
// (https://github.com/olivernn/lunr.js?tab=MIT-1-ov-file). Die Umsetzung der Suche ist inspiriert von der Lunr.js-Suchkomponente //
// von J.H. van der Schee (https://jekyllcodex.org/without-plugin/search-lunr/) sowie jener von Just the Docs
// (https://just-the-docs.com/docs/search/). //

// The searches on arkumu-Docs use Lunr.js (https://lunrjs.com/). Lunr.js ist published under the MIT-License.
// (https://github.com/olivernn/lunr.js?tab=MIT-1-ov-file). The realization of the search is inspired by the Lurn.js search component //
// by J.H. van der Schee (https://jekyllcodex.org/without-plugin/search-lunr/) and the search component by Just the Docs //
// (https://just-the-docs.com/docs/search/). //

document.addEventListener('DOMContentLoaded', initialize_search);

var idx;

function initialize_search() {
    fetch('https://docs.arkumu.nrw/search.json')
        .then(response => response.json())
        .then(searchData => {
        
            idx = lunr(function () {
            this.ref('id');
            this.field('title');
            this.field('content');

            searchData.forEach(function (doc, id) {
                this.add({
                    id: id,
                    title: doc.title,
                    content: doc.content,
                    url: doc.url
                });
                }, this);
            });

            var searchInput = document.getElementById('search-input');
            
            searchInput.addEventListener('input', function () {
                var query = this.value.trim();
                var searchResultsContainer = document.getElementById('search-results');

                // Styling der Suchergebnisse in der Desktop-Version
                // Styling of the search results in the desktop version
                if (query !== '') {
                    performSearch(query, searchData, searchResultsContainer);
                    searchResultsContainer.style.display = 'block';
                    searchResultsContainer.style.border = '1px solid #ccc';
                    searchResultsContainer.style.width = '397px';
                } else {
                    searchResultsContainer.innerHTML = '';
                    searchResultsContainer.style.display = 'none';
                    searchResultsContainer.style.border = 'none';
                }
            });
        })
    .catch(error => {
        console.error('Error fetching search data:', error);
    });
}

function performSearch(query, searchData) {
    var queryTokens = query.toLowerCase().split(" ");

    var results = idx.query(function (q) {
        queryTokens.forEach(function (token) {
            q.term(token, {
                wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
            });
        });
    });

    var resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (results.length > 0) {
    for (var i = 0; i < Math.min(results.length, 3); i++) {// Nummer der Suchergebnisse | Number of search results
        var result = results[i];
        var item = searchData[result.ref];
        var resultDiv = document.createElement('div');
        resultDiv.classList.add('search-result');

        // Styling des Titels in den Suchergebnissen
        // Styling of the title in the search results
        var highlightedTitle = item.title.replace(new RegExp(query, 'gi'), '<b style="font-weight: 900;">$&</b>');

        resultDiv.innerHTML += '<svg class="download-icon" style="right: 4px;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg><h3 style="display: inline-block;"><b>' + highlightedTitle + '</b></h3><br/>';

        var occurrences = [];
        var regex = new RegExp(query, 'gi');
        var match;
        while ((match = regex.exec(item.content)) !== null) {
            occurrences.push(match.index);
        }

        if (occurrences.length > 0) {
            var contentSpan = document.createElement('span');
            resultDiv.appendChild(contentSpan);

            for (var j = 0; j < Math.min(occurrences.length, 3); j++) {// Nummer der gefundenen Textübereinstimmungs-Ausschnitte | Number of found text matches
                var index = occurrences[j];
                var start = Math.max(0, index - 30); // Zeichen vor dem Suchergebnis | Leading characters before result
                var end = Math.min(item.content.length, index + query.length + 30);  // Zeichen nach dem Suchergebnis | Leading characters before result
                var context = item.content.substring(start, end);

                // Styling für die Textbausteine
                // Styling for text results
                var highlightedContext = context.replace(new RegExp(query, 'gi'), '<b style="font-weight: 900;">$&</b>');
                contentSpan.innerHTML += highlightedContext + '<br>';
            }

        // Version, falls keine Textübereinstimmung vorliegt
        // Version if no text match is present
        
        } else {
            var previewLength = Math.min(100, item.content.length);
            var previewContent = item.content.substring(0, previewLength);
            var previewSpan = document.createElement('span');
            previewSpan.textContent = previewContent;
            resultDiv.appendChild(previewSpan);
        }

        var resultLink = document.createElement('a');
        resultLink.href = item.url;
        resultLink.appendChild(resultDiv);

        resultsContainer.appendChild(resultLink);
    }
    // Text, falls keine Übereinstimmung gefunden wurde
    // Text if no match was found
    } else {
        resultsContainer.innerHTML = '<div class="search-result">Keine Übereinstimmung gefunden.</div>';
    }
}

// Steuerelemente um die Suchergebnisse mit dem Input-Feld beim Rezising gleich groß zu halten
// Control for resizing the search results with the search input
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-input').addEventListener('input', function() {
      var searchResults = document.getElementById('search-results');
      var inputRect = this.getBoundingClientRect();
      searchResults.style.top = (inputRect.bottom + window.scrollY) + 'px';
      searchResults.style.left = inputRect.left + 'px';
      searchResults.style.width = inputRect.width + 'px';
      searchResults.style.display = 'block';
    });
    
    window.addEventListener('resize', function() {
      var searchResults = document.getElementById('search-results');
      var inputRect = document.getElementById('search-input').getBoundingClientRect();
      searchResults.style.top = (inputRect.bottom + window.scrollY) + 'px';
      searchResults.style.left = inputRect.left + 'px';
      searchResults.style.width = inputRect.width + 'px';
    });
    
    // Event-Listener zum Schließen der Suchergebnisse, wenn außerhalb von ihnen geklickt wird
    // Event listener for closing the search results when clicking outside of them
    document.addEventListener('click', function(event) {
      var searchInput = document.getElementById('search-input');
      var searchResults = document.getElementById('search-results');
      if (event.target !== searchInput && !searchResults.contains(event.target)) {
        searchResults.style.display = 'none';
      }
    });
  });

/********************************************************************************************************************************/

// Lunar.js-Suche (Mobile) //
// Lunr.js Search (Mobile)//

// Die Suchen auf arkumu-Docs verwenden Lunr.js (https://lunrjs.com/). Lunr.js ist unter der MIT-License veröffentlicht.
// (https://github.com/olivernn/lunr.js?tab=MIT-1-ov-file). Die Umsetzung der Suche ist inspiriert von der Lunr.js-Suchkomponente //
// von J.H. van der Schee (https://jekyllcodex.org/without-plugin/search-lunr/) sowie jener von Just the Docs
// (https://just-the-docs.com/docs/search/). //

// The search function on arkumu-Docs uses Lunr.js (https://lunrjs.com/). Lunr.js ist published under the MIT-License.
// (https://github.com/olivernn/lunr.js?tab=MIT-1-ov-file). The realization of the search is inspired by the Lurn.js search component //
// by J.H. van der Schee (https://jekyllcodex.org/without-plugin/search-lunr/) and the search component by Just the Docs //
// (https://just-the-docs.com/docs/search/). //

document.addEventListener('DOMContentLoaded', initialize_mobile_search);

var idx_mobile;

function initialize_mobile_search() {
    fetch('https://docs.arkumu.nrw/search.json')
        .then(response => response.json())
        .then(searchData => {
            idx_mobile = lunr(function () {
                this.ref('id');
                this.field('title');
                this.field('content');

                searchData.forEach(function (doc, id) {
                    this.add({
                        id: id,
                        title: doc.title,
                        content: doc.content,
                        url: doc.url
                    });
                }, this);
            });

            var mobileSearchInput = document.getElementById('mobile-search-input');

            mobileSearchInput.addEventListener('input', function () {
                var query = this.value.trim();
                var mobileSearchResultsContainer = document.getElementById('mobile-search-results');
                
                // Styling der Suchergebnisse in der Mobil-Version
                // Styling of the search results in the mobile version
                if (query !== '') {
                    performMobileSearch(query, searchData, mobileSearchResultsContainer);
                    mobileSearchResultsContainer.style.display = 'block';
                } else {
                    mobileSearchResultsContainer.innerHTML = '';
                    mobileSearchResultsContainer.style.display = 'none';
                    mobileSearchResultsContainer.style.border = 'none';
                }
            });
        })
        .catch(error => {
            console.error('Error fetching search data:', error);
        });
}

function performMobileSearch(query, searchData, mobileSearchResultsContainer) {
    var queryTokens = query.toLowerCase().split(" ");

    var results = idx_mobile.query(function (q) {
        queryTokens.forEach(function (token) {
            q.term(token, {
                wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
            });
        });
    });

    mobileSearchResultsContainer.innerHTML = '';

    if (results.length > 0) {
        for (var i = 0; i < Math.min(results.length, 3); i++) {// Nummer der Suchergebnisse | Number of search results
            var result = results[i];
            var item = searchData[result.ref];
            var resultDiv = document.createElement('div');
            resultDiv.classList.add('mobile-search-result');

            // Styling des Titels in den Suchergebnissen
            // Styling of the title in the search results
            var highlightedTitle = item.title.replace(new RegExp(query, 'gi'), '<b style="font-weight: 900;">$&</b>');

            resultDiv.innerHTML += '<svg class="download-icon" style="right: 4px;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg><h3 style="display: inline-block;"><b>' + highlightedTitle + '</b></h3><br/>';

            var occurrences = [];
            var regex = new RegExp(query, 'gi');
            var match;
            while ((match = regex.exec(item.content)) !== null) {
                occurrences.push(match.index);
            }

            if (occurrences.length > 0) {
                var contentSpan = document.createElement('span');
                resultDiv.appendChild(contentSpan);

                for (var j = 0; j < Math.min(occurrences.length, 3); j++) {// Nummer der gefundenen Textübereinstimmungs-Ausschnitte | Number of found text matches
                    var index = occurrences[j];
                    var start = Math.max(0, index - 30); // Zeichen vor dem Suchergebnis | Leading characters before result
                    var end = Math.min(item.content.length, index + query.length + 30);  // Zeichen nach dem Suchergebnis | Leading characters before result
                    var context = item.content.substring(start, end);

                    // Styling für die Textbausteine
                    // Styling for text results
                    var highlightedContext = context.replace(new RegExp(query, 'gi'), '<b style="font-weight: 900;">$&</b>');
                    contentSpan.innerHTML += highlightedContext + '<br>';
                }
            } else {
                var previewLength = Math.min(100, item.content.length);
                var previewContent = item.content.substring(0, previewLength);
                var previewSpan = document.createElement('span'); 
                previewSpan.textContent = previewContent;
                resultDiv.appendChild(previewSpan);
            }

            var resultLink = document.createElement('a');
            resultLink.href = item.url;
            resultLink.appendChild(resultDiv);

            mobileSearchResultsContainer.appendChild(resultLink);
        }
    
    // Text, falls keine Übereinstimmung gefunden wurde
    // Text if no match was found    
    } else {
        mobileSearchResultsContainer.innerHTML = '<div class="mobile-search-result">Keine Übereinstimmung gefunden.</div>';
    }
}

// Steuerelemente um die Suchergebnisse mit dem Input-Feld beim Rezising gleich groß zu halten
// Control for resizing the search results with the search input
document.addEventListener('DOMContentLoaded', function() {
    var mobileSearchInput = document.getElementById('mobile-search-input');
    var mobileSearchResults = document.getElementById('mobile-search-results');

    mobileSearchInput.addEventListener('input', function() {
        var inputRect = this.getBoundingClientRect();
        mobileSearchResults.style.top = (inputRect.bottom + window.scrollY) + 'px';
        mobileSearchResults.style.left = inputRect.left + 'px';
        mobileSearchResults.style.width = inputRect.width + 'px';
        mobileSearchResults.style.display = 'block';
    });

    window.addEventListener('resize', function() {
        var inputRect = mobileSearchInput.getBoundingClientRect();
        mobileSearchResults.style.top = (inputRect.bottom + window.scrollY) + 'px';
        mobileSearchResults.style.left = inputRect.left + 'px';
        mobileSearchResults.style.width = inputRect.width + 'px';
    });

    // Event-Listener zum Schließen der Suchergebnisse, wenn außerhalb von ihnen geklickt oder gedrückt wird
    // Event listener for closing the search results when clicking or pressing outside of them
    document.addEventListener('click', function(event) {
        if (event.target !== mobileSearchInput && !mobileSearchResults.contains(event.target)) {
            mobileSearchResults.style.display = 'none';
        }
    });
});


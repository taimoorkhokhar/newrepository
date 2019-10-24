// ==UserScript==
// @name         poshmark
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://poshmark.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    let category_link_count = 1;
    //default for women category
    let navbar_category_links;
    let title;
    let share_link;
    let count;
    let share_icon;
    let page_title = document.querySelector('title').text;
    let page_load_delay = 5000;
    let next_category_hover_delay = 32000;
    let next_category_click_delay = 34000;
    let open = XMLHttpRequest.prototype.open;
    navbar_category_links = document.querySelectorAll('ul.header--scrollable__nav__links li a');
    //get links from feed page
    //Get title of current page


        //get server status

        XMLHttpRequest.prototype.open = function(m, u, a, us, p) {
            if(m == 'POST'){
                this.addEventListener('readystatechange', function() {
                    if (this.readyState === 4){
                        this.reponseType = 'json'
                        console.log('Response Status ==>' ,this.status)
                    }
                }, false);
            }
            open.call(this, m, u, a, us, p);
        };



    //add time_out and click functionality
    function click_product(object, count) {
        return new Promise((resolve,reject)=>{
            setTimeout(function(j) {
                object.click();
                const error = false;
                if (!error) {
                    resolve();
                }
            }, 6000 * count);
        }
        );
    }

    //add time_out and click functionality
    function time_out(share_link, count) {
        setTimeout(function(j) {
            share_link.click()
            share_link.addEventListener('click', function(){XMLHttpRequest.prototype.open});
        }, (6000 * count) + 2000);
    }

    //share links of first four products
    function share_product_link() {
        share_icon = document.querySelectorAll('.listing-actions-con a.share');
        for (count = 0; count < 4; count++) {
            click_product(share_icon[count], count + 1).then();
            time_out(share_link = document.querySelector('.internal-share-con .internal-shares a'), count + 1);
        }
    }


    if (page_title == 'Women on Poshmark') {
        setTimeout(function() {
            share_product_link()
        }, page_load_delay);
        navbar_category_links = document.querySelectorAll('ul.scrollable-nav-sublist li div.scrollable-nav-dropdown.dropdown.title');
        var men_link = navbar_category_links[1].querySelector('a');
        setTimeout(function() {
            men_link.click()
        }, next_category_hover_delay);
        setTimeout(function() {
            men_link.click()
        }, next_category_click_delay);
    } else if (page_title == 'Men on Poshmark') {
        setTimeout(function() {
            share_product_link()
        }, page_load_delay);
        navbar_category_links = document.querySelectorAll('ul.scrollable-nav-sublist li div.scrollable-nav-dropdown.dropdown.title');
        var kid_link = navbar_category_links[2].querySelector('a');
        setTimeout(function() {
            kid_link.click()
        }, next_category_hover_delay);
        setTimeout(function() {
            kid_link.click()
        }, next_category_click_delay);
    } else if (page_title == 'Kids on Poshmark') {
        setTimeout(function() {
            share_product_link()
        }, page_load_delay);
    } else if (page_title == 'Feed - Poshmark') {
        setTimeout(function() {
        navbar_category_links[category_link_count].click();
        }, page_load_delay);
    } else {
        return
    }
})();




/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */

        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it("should have valid url for each feed", () => {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(typeof (allFeeds[i].url)).toBe("string");
                expect(allFeeds[i].url.length).not.toBe(0);

            }
        });

        it("should have valid name for each feed", () => {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(typeof (allFeeds[i].name)).toBe("string");
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe("The menu", () => {

        const body = document.querySelector("body");

        it("is hidden initially", () => {

            expect(body.classList.contains("menu-hidden")).toBe(true);

        });

        it("changes visibility on clicked and hides when cliked again", () => {

            const menuButton = document.querySelector(".menu-icon-link");
            menuButton.click();
            expect(body.classList.contains("menu-hidden")).toBe(false);
            menuButton.click();
            expect(body.classList.contains("menu-hidden")).toBe(true);

        });

    });

    describe("Initial Entires", () => {
        beforeEach((done) => {
            loadFeed(0,done);
        });

        it("has atleast one entry", () => {
            const feedEntries = document.querySelectorAll(".feed .entry");
            expect(feedEntries).toBeDefined();
            expect(feedEntries.length).toBeGreaterThan(0);

        });

    });

    describe("New Feed Selection", () => {
        let oldFeed, newFeed;

        beforeEach((done) => {
            loadFeed(0, () => {
                oldFeed = document.querySelector("div.feed").innerHTML;
                loadFeed(1, () => {
                    newFeed = document.querySelector("div.feed").innerHTML;
                    done();
                });
            });
        });

        it("loads another feed", () => {
            expect(newFeed).not.toBe(oldFeed);

        });

    });

}());
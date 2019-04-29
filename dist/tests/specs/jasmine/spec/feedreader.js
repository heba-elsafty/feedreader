/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/* This is our first test suite - a test suite just contains
	* a related set of tests. This suite is all about the RSS
	* feeds definitions, the allFeeds variable in our application.
	*/
	describe('RSS Feeds', function() {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. Experiment with this before you get started on
		 * the rest of this project. What happens when you change
		 * allFeeds in app.js to be an empty array and refresh the
		 * page?
		 */
		it('are defined', function() {
				expect(allFeeds).toBeDefined();
				expect(allFeeds.length).not.toBe(0);
		});


		/* TODO: Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
		 * and that the URL is not empty.
		 */
		it('URL defined', function() {
			for(let feed of allFeeds){
				expect(Feed.url).toBeDefined();
			}
	});

		/* TODO: Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 */
	});


		/* TODO: Write a new test suite named "The menu" */

				/* TODO: Write a test that ensures the menu element is
				 * hidden by default. You'll have to analyze the HTML and
				 * the CSS to determine how we're performing the
				 * hiding/showing of the menu element.
				 */

				 /* TODO: Write a test that ensures the menu changes
					* visibility when the menu icon is clicked. This test
					* should have two expectations: does the menu display when
					* clicked and does it hide when clicked again.
					*/

		/* TODO: Write a new test suite named "Initial Entries" */

				/* TODO: Write a test that ensures when the loadFeed
				 * function is called and completes its work, there is at least
				 * a single .entry element within the .feed container.
				 * Remember, loadFeed() is asynchronous so this test will require
				 * the use of Jasmine's beforeEach and asynchronous done() function.
				 */

		/* TODO: Write a new test suite named "New Feed Selection" */

				/* TODO: Write a test that ensures when a new feed is loaded
				 * by the loadFeed function that the content actually changes.
				 * Remember, loadFeed() is asynchronous.
				 */
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqYXNtaW5lL3NwZWMvZmVlZHJlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmZWVkcmVhZGVyLmpzXG4gKlxuICogVGhpcyBpcyB0aGUgc3BlYyBmaWxlIHRoYXQgSmFzbWluZSB3aWxsIHJlYWQgYW5kIGNvbnRhaW5zXG4gKiBhbGwgb2YgdGhlIHRlc3RzIHRoYXQgd2lsbCBiZSBydW4gYWdhaW5zdCB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5cbi8qIFdlJ3JlIHBsYWNpbmcgYWxsIG9mIG91ciB0ZXN0cyB3aXRoaW4gdGhlICQoKSBmdW5jdGlvbixcbiAqIHNpbmNlIHNvbWUgb2YgdGhlc2UgdGVzdHMgbWF5IHJlcXVpcmUgRE9NIGVsZW1lbnRzLiBXZSB3YW50XG4gKiB0byBlbnN1cmUgdGhleSBkb24ndCBydW4gdW50aWwgdGhlIERPTSBpcyByZWFkeS5cbiAqL1xuJChmdW5jdGlvbigpIHtcblx0LyogVGhpcyBpcyBvdXIgZmlyc3QgdGVzdCBzdWl0ZSAtIGEgdGVzdCBzdWl0ZSBqdXN0IGNvbnRhaW5zXG5cdCogYSByZWxhdGVkIHNldCBvZiB0ZXN0cy4gVGhpcyBzdWl0ZSBpcyBhbGwgYWJvdXQgdGhlIFJTU1xuXHQqIGZlZWRzIGRlZmluaXRpb25zLCB0aGUgYWxsRmVlZHMgdmFyaWFibGUgaW4gb3VyIGFwcGxpY2F0aW9uLlxuXHQqL1xuXHRkZXNjcmliZSgnUlNTIEZlZWRzJywgZnVuY3Rpb24oKSB7XG5cdFx0LyogVGhpcyBpcyBvdXIgZmlyc3QgdGVzdCAtIGl0IHRlc3RzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZVxuXHRcdCAqIGFsbEZlZWRzIHZhcmlhYmxlIGhhcyBiZWVuIGRlZmluZWQgYW5kIHRoYXQgaXQgaXMgbm90XG5cdFx0ICogZW1wdHkuIEV4cGVyaW1lbnQgd2l0aCB0aGlzIGJlZm9yZSB5b3UgZ2V0IHN0YXJ0ZWQgb25cblx0XHQgKiB0aGUgcmVzdCBvZiB0aGlzIHByb2plY3QuIFdoYXQgaGFwcGVucyB3aGVuIHlvdSBjaGFuZ2Vcblx0XHQgKiBhbGxGZWVkcyBpbiBhcHAuanMgdG8gYmUgYW4gZW1wdHkgYXJyYXkgYW5kIHJlZnJlc2ggdGhlXG5cdFx0ICogcGFnZT9cblx0XHQgKi9cblx0XHRpdCgnYXJlIGRlZmluZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZXhwZWN0KGFsbEZlZWRzKS50b0JlRGVmaW5lZCgpO1xuXHRcdFx0XHRleHBlY3QoYWxsRmVlZHMubGVuZ3RoKS5ub3QudG9CZSgwKTtcblx0XHR9KTtcblxuXG5cdFx0LyogVE9ETzogV3JpdGUgYSB0ZXN0IHRoYXQgbG9vcHMgdGhyb3VnaCBlYWNoIGZlZWRcblx0XHQgKiBpbiB0aGUgYWxsRmVlZHMgb2JqZWN0IGFuZCBlbnN1cmVzIGl0IGhhcyBhIFVSTCBkZWZpbmVkXG5cdFx0ICogYW5kIHRoYXQgdGhlIFVSTCBpcyBub3QgZW1wdHkuXG5cdFx0ICovXG5cdFx0aXQoJ1VSTCBkZWZpbmVkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRmb3IobGV0IGZlZWQgb2YgYWxsRmVlZHMpe1xuXHRcdFx0XHRleHBlY3QoRmVlZC51cmwpLnRvQmVEZWZpbmVkKCk7XG5cdFx0XHR9XG5cdH0pO1xuXG5cdFx0LyogVE9ETzogV3JpdGUgYSB0ZXN0IHRoYXQgbG9vcHMgdGhyb3VnaCBlYWNoIGZlZWRcblx0XHQgKiBpbiB0aGUgYWxsRmVlZHMgb2JqZWN0IGFuZCBlbnN1cmVzIGl0IGhhcyBhIG5hbWUgZGVmaW5lZFxuXHRcdCAqIGFuZCB0aGF0IHRoZSBuYW1lIGlzIG5vdCBlbXB0eS5cblx0XHQgKi9cblx0fSk7XG5cblxuXHRcdC8qIFRPRE86IFdyaXRlIGEgbmV3IHRlc3Qgc3VpdGUgbmFtZWQgXCJUaGUgbWVudVwiICovXG5cblx0XHRcdFx0LyogVE9ETzogV3JpdGUgYSB0ZXN0IHRoYXQgZW5zdXJlcyB0aGUgbWVudSBlbGVtZW50IGlzXG5cdFx0XHRcdCAqIGhpZGRlbiBieSBkZWZhdWx0LiBZb3UnbGwgaGF2ZSB0byBhbmFseXplIHRoZSBIVE1MIGFuZFxuXHRcdFx0XHQgKiB0aGUgQ1NTIHRvIGRldGVybWluZSBob3cgd2UncmUgcGVyZm9ybWluZyB0aGVcblx0XHRcdFx0ICogaGlkaW5nL3Nob3dpbmcgb2YgdGhlIG1lbnUgZWxlbWVudC5cblx0XHRcdFx0ICovXG5cblx0XHRcdFx0IC8qIFRPRE86IFdyaXRlIGEgdGVzdCB0aGF0IGVuc3VyZXMgdGhlIG1lbnUgY2hhbmdlc1xuXHRcdFx0XHRcdCogdmlzaWJpbGl0eSB3aGVuIHRoZSBtZW51IGljb24gaXMgY2xpY2tlZC4gVGhpcyB0ZXN0XG5cdFx0XHRcdFx0KiBzaG91bGQgaGF2ZSB0d28gZXhwZWN0YXRpb25zOiBkb2VzIHRoZSBtZW51IGRpc3BsYXkgd2hlblxuXHRcdFx0XHRcdCogY2xpY2tlZCBhbmQgZG9lcyBpdCBoaWRlIHdoZW4gY2xpY2tlZCBhZ2Fpbi5cblx0XHRcdFx0XHQqL1xuXG5cdFx0LyogVE9ETzogV3JpdGUgYSBuZXcgdGVzdCBzdWl0ZSBuYW1lZCBcIkluaXRpYWwgRW50cmllc1wiICovXG5cblx0XHRcdFx0LyogVE9ETzogV3JpdGUgYSB0ZXN0IHRoYXQgZW5zdXJlcyB3aGVuIHRoZSBsb2FkRmVlZFxuXHRcdFx0XHQgKiBmdW5jdGlvbiBpcyBjYWxsZWQgYW5kIGNvbXBsZXRlcyBpdHMgd29yaywgdGhlcmUgaXMgYXQgbGVhc3Rcblx0XHRcdFx0ICogYSBzaW5nbGUgLmVudHJ5IGVsZW1lbnQgd2l0aGluIHRoZSAuZmVlZCBjb250YWluZXIuXG5cdFx0XHRcdCAqIFJlbWVtYmVyLCBsb2FkRmVlZCgpIGlzIGFzeW5jaHJvbm91cyBzbyB0aGlzIHRlc3Qgd2lsbCByZXF1aXJlXG5cdFx0XHRcdCAqIHRoZSB1c2Ugb2YgSmFzbWluZSdzIGJlZm9yZUVhY2ggYW5kIGFzeW5jaHJvbm91cyBkb25lKCkgZnVuY3Rpb24uXG5cdFx0XHRcdCAqL1xuXG5cdFx0LyogVE9ETzogV3JpdGUgYSBuZXcgdGVzdCBzdWl0ZSBuYW1lZCBcIk5ldyBGZWVkIFNlbGVjdGlvblwiICovXG5cblx0XHRcdFx0LyogVE9ETzogV3JpdGUgYSB0ZXN0IHRoYXQgZW5zdXJlcyB3aGVuIGEgbmV3IGZlZWQgaXMgbG9hZGVkXG5cdFx0XHRcdCAqIGJ5IHRoZSBsb2FkRmVlZCBmdW5jdGlvbiB0aGF0IHRoZSBjb250ZW50IGFjdHVhbGx5IGNoYW5nZXMuXG5cdFx0XHRcdCAqIFJlbWVtYmVyLCBsb2FkRmVlZCgpIGlzIGFzeW5jaHJvbm91cy5cblx0XHRcdFx0ICovXG59KCkpO1xuIl0sImZpbGUiOiJqYXNtaW5lL3NwZWMvZmVlZHJlYWRlci5qcyJ9

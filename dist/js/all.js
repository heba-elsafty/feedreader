var allFeeds=[{name:"Udacity Blog",url:"http://blog.udacity.com/feed"},{name:"CSS Tricks",url:"http://feeds.feedburner.com/CssTricks"},{name:"HTML5 Rocks",url:"http://feeds.feedburner.com/html5rocks"},{name:"Linear Digressions",url:"http://feeds.feedburner.com/udacity-linear-digressions"}];function init(){loadFeed(0)}function loadFeed(e,n){var t=allFeeds[e].url,a=allFeeds[e].name;$.ajax({type:"POST",url:"https://rsstojson.udacity.com/parseFeed",data:JSON.stringify({url:t}),contentType:"application/json",success:function(e,t){var d=$(".feed"),i=$(".header-title"),l=e.feed.entries,o=(l.length,Handlebars.compile($(".tpl-entry").html()));i.html(a),d.empty(),l.forEach(function(e){d.append(o(e))}),n&&n()},error:function(e,t,a){n&&n()},dataType:"json"})}google.setOnLoadCallback(init),$(function(){$(".feed");var e=$(".feed-list"),n=Handlebars.compile($(".tpl-feed-list-item").html()),t=0,a=$(".menu-icon-link");allFeeds.forEach(function(a){a.id=t,e.append(n(a)),t++}),e.on("click","a",function(){var e=$(this);return $("body").addClass("menu-hidden"),loadFeed(e.data("id")),!1}),a.on("click",function(){$("body").toggleClass("menu-hidden")})}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJhbGxGZWVkcyIsIm5hbWUiLCJ1cmwiLCJpbml0IiwibG9hZEZlZWQiLCJpZCIsImNiIiwiZmVlZFVybCIsImZlZWROYW1lIiwiJCIsImFqYXgiLCJ0eXBlIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJzdGF0dXMiLCJjb250YWluZXIiLCJ0aXRsZSIsImVudHJpZXMiLCJmZWVkIiwiZW50cnlUZW1wbGF0ZSIsImxlbmd0aCIsIkhhbmRsZWJhcnMiLCJjb21waWxlIiwiaHRtbCIsImVtcHR5IiwiZm9yRWFjaCIsImVudHJ5IiwiYXBwZW5kIiwiZXJyb3IiLCJlcnIiLCJkYXRhVHlwZSIsImdvb2dsZSIsInNldE9uTG9hZENhbGxiYWNrIiwiZmVlZExpc3QiLCJmZWVkSXRlbVRlbXBsYXRlIiwiZmVlZElkIiwibWVudUljb24iLCJvbiIsIml0ZW0iLCJ0aGlzIiwiYWRkQ2xhc3MiLCJ0b2dnbGVDbGFzcyJdLCJtYXBwaW5ncyI6IkFBU0EsSUFBQUEsU0FBQSxDQUNBLENBQ0FDLEtBQUEsZUFDQUMsSUFBQSxnQ0FDQSxDQUNBRCxLQUFBLGFBQ0FDLElBQUEseUNBQ0EsQ0FDQUQsS0FBQSxjQUNBQyxJQUFBLDBDQUNBLENBQ0FELEtBQUEscUJBQ0FDLElBQUEsMkRBUUEsU0FBQUMsT0FFQUMsU0FBQSxHQVdBLFNBQUFBLFNBQUFDLEVBQUFDLEdBQ0EsSUFBQUMsRUFBQVAsU0FBQUssR0FBQUgsSUFDQU0sRUFBQVIsU0FBQUssR0FBQUosS0FFQVEsRUFBQUMsS0FBQSxDQUNBQyxLQUFBLE9BQ0FULElBQUEsMENBQ0FVLEtBQUFDLEtBQUFDLFVBQUEsQ0FBQVosSUFBQUssSUFDQVEsWUFBQSxtQkFDQUMsUUFBQSxTQUFBQyxFQUFBQyxHQUVBLElBQUFDLEVBQUFWLEVBQUEsU0FDQVcsRUFBQVgsRUFBQSxpQkFDQVksRUFBQUosRUFBQUssS0FBQUQsUUFFQUUsR0FEQUYsRUFBQUcsT0FDQUMsV0FBQUMsUUFBQWpCLEVBQUEsY0FBQWtCLFNBRUFQLEVBQUFPLEtBQUFuQixHQUNBVyxFQUFBUyxRQU9BUCxFQUFBUSxRQUFBLFNBQUFDLEdBQ0FYLEVBQUFZLE9BQUFSLEVBQUFPLE1BR0F4QixHQUNBQSxLQUdBMEIsTUFBQSxTQUFBZixFQUFBQyxFQUFBZSxHQUVBM0IsR0FDQUEsS0FHQTRCLFNBQUEsU0FPQUMsT0FBQUMsa0JBQUFqQyxNQU1BTSxFQUFBLFdBQ0FBLEVBQUEsU0FBQSxJQUNBNEIsRUFBQTVCLEVBQUEsY0FDQTZCLEVBQUFiLFdBQUFDLFFBQUFqQixFQUFBLHVCQUFBa0IsUUFDQVksRUFBQSxFQUNBQyxFQUFBL0IsRUFBQSxtQkFRQVQsU0FBQTZCLFFBQUEsU0FBQVAsR0FDQUEsRUFBQWpCLEdBQUFrQyxFQUNBRixFQUFBTixPQUFBTyxFQUFBaEIsSUFFQWlCLE1BT0FGLEVBQUFJLEdBQUEsUUFBQSxJQUFBLFdBQ0EsSUFBQUMsRUFBQWpDLEVBQUFrQyxNQUlBLE9BRkFsQyxFQUFBLFFBQUFtQyxTQUFBLGVBQ0F4QyxTQUFBc0MsRUFBQTlCLEtBQUEsUUFDQSxJQU1BNEIsRUFBQUMsR0FBQSxRQUFBLFdBQ0FoQyxFQUFBLFFBQUFvQyxZQUFBLGlCQXBDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogYXBwLmpzXG4gKlxuICogVGhpcyBpcyBvdXIgUlNTIGZlZWQgcmVhZGVyIGFwcGxpY2F0aW9uLiBJdCB1c2VzIHRoZSBHb29nbGVcbiAqIEZlZWQgUmVhZGVyIEFQSSB0byBncmFiIFJTUyBmZWVkcyBhcyBKU09OIG9iamVjdCB3ZSBjYW4gbWFrZVxuICogdXNlIG9mLiBJdCBhbHNvIHVzZXMgdGhlIEhhbmRsZWJhcnMgdGVtcGxhdGluZyBsaWJyYXJ5IGFuZFxuICogalF1ZXJ5LlxuICovXG5cbi8vIFRoZSBuYW1lcyBhbmQgVVJMcyB0byBhbGwgb2YgdGhlIGZlZWRzIHdlJ2QgbGlrZSBhdmFpbGFibGUuXG52YXIgYWxsRmVlZHMgPSBbXG5cdHtcblx0XHRcdG5hbWU6ICdVZGFjaXR5IEJsb2cnLFxuXHRcdFx0dXJsOiAnaHR0cDovL2Jsb2cudWRhY2l0eS5jb20vZmVlZCdcblx0fSwge1xuXHRcdFx0bmFtZTogJ0NTUyBUcmlja3MnLFxuXHRcdFx0dXJsOiAnaHR0cDovL2ZlZWRzLmZlZWRidXJuZXIuY29tL0Nzc1RyaWNrcydcblx0fSwge1xuXHRcdFx0bmFtZTogJ0hUTUw1IFJvY2tzJyxcblx0XHRcdHVybDogJ2h0dHA6Ly9mZWVkcy5mZWVkYnVybmVyLmNvbS9odG1sNXJvY2tzJ1xuXHR9LCB7XG5cdFx0XHRuYW1lOiAnTGluZWFyIERpZ3Jlc3Npb25zJyxcblx0XHRcdHVybDogJ2h0dHA6Ly9mZWVkcy5mZWVkYnVybmVyLmNvbS91ZGFjaXR5LWxpbmVhci1kaWdyZXNzaW9ucydcblx0fVxuXTtcblxuLyogVGhpcyBmdW5jdGlvbiBzdGFydHMgdXAgb3VyIGFwcGxpY2F0aW9uLiBUaGUgR29vZ2xlIEZlZWRcbiogUmVhZGVyIEFQSSBpcyBsb2FkZWQgYXN5bmNob25vdXNseSBhbmQgd2lsbCB0aGVuIGNhbGwgdGhpc1xuKiBmdW5jdGlvbiB3aGVuIHRoZSBBUEkgaXMgbG9hZGVkLlxuKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdC8vIExvYWQgdGhlIGZpcnN0IGZlZWQgd2UndmUgZGVmaW5lZCAoaW5kZXggb2YgMCkuXG5cdGxvYWRGZWVkKDApO1xufVxuXG4vKiBUaGlzIGZ1bmN0aW9uIHBlcmZvcm1zIGV2ZXJ5dGhpbmcgbmVjZXNzYXJ5IHRvIGxvYWQgYVxuKiBmZWVkIHVzaW5nIHRoZSBHb29nbGUgRmVlZCBSZWFkZXIgQVBJLiBJdCB3aWxsIHRoZW5cbiogcGVyZm9ybSBhbGwgb2YgdGhlIERPTSBvcGVyYXRpb25zIHJlcXVpcmVkIHRvIGRpc3BsYXlcbiogZmVlZCBlbnRyaWVzIG9uIHRoZSBwYWdlLiBGZWVkcyBhcmUgcmVmZXJlbmNlZCBieSB0aGVpclxuKiBpbmRleCBwb3NpdGlvbiB3aXRoaW4gdGhlIGFsbEZlZWRzIGFycmF5LlxuKiBUaGlzIGZ1bmN0aW9uIGFsbCBzdXBwb3J0cyBhIGNhbGxiYWNrIGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyXG4qIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGV2ZXJ5dGhpbmcgaGFzIHJ1biBzdWNjZXNzZnVsbHkuXG4qL1xuZnVuY3Rpb24gbG9hZEZlZWQoaWQsIGNiKSB7XG5cdHZhciBmZWVkVXJsID0gYWxsRmVlZHNbaWRdLnVybCxcblx0XHRcdGZlZWROYW1lID0gYWxsRmVlZHNbaWRdLm5hbWU7XG5cblx0JC5hamF4KHtcblx0XHR0eXBlOiBcIlBPU1RcIixcblx0XHR1cmw6ICdodHRwczovL3Jzc3RvanNvbi51ZGFjaXR5LmNvbS9wYXJzZUZlZWQnLFxuXHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KHt1cmw6IGZlZWRVcmx9KSxcblx0XHRjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL2pzb25cIixcblx0XHRzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCBzdGF0dXMpe1xuXG5cdFx0XHR2YXIgY29udGFpbmVyID0gJCgnLmZlZWQnKSxcblx0XHRcdFx0dGl0bGUgPSAkKCcuaGVhZGVyLXRpdGxlJyksXG5cdFx0XHRcdGVudHJpZXMgPSByZXN1bHQuZmVlZC5lbnRyaWVzLFxuXHRcdFx0XHRlbnRyaWVzTGVuID0gZW50cmllcy5sZW5ndGgsXG5cdFx0XHRcdGVudHJ5VGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoJCgnLnRwbC1lbnRyeScpLmh0bWwoKSk7XG5cblx0XHRcdFx0dGl0bGUuaHRtbChmZWVkTmFtZSk7ICAgLy8gU2V0IHRoZSBoZWFkZXIgdGV4dFxuXHRcdFx0XHRjb250YWluZXIuZW1wdHkoKTsgICAgICAvLyBFbXB0eSBvdXQgYWxsIHByZXZpb3VzIGVudHJpZXNcblxuXHRcdFx0XHQvKiBMb29wIHRocm91Z2ggdGhlIGVudHJpZXMgd2UganVzdCBsb2FkZWQgdmlhIHRoZSBHb29nbGVcblx0XHRcdFx0XHQqIEZlZWQgUmVhZGVyIEFQSS4gV2UnbGwgdGhlbiBwYXJzZSB0aGF0IGVudHJ5IGFnYWluc3QgdGhlXG5cdFx0XHRcdFx0KiBlbnRyeVRlbXBsYXRlIChjcmVhdGVkIGFib3ZlIHVzaW5nIEhhbmRsZWJhcnMpIGFuZCBhcHBlbmRcblx0XHRcdFx0XHQqIHRoZSByZXN1bHRpbmcgSFRNTCB0byB0aGUgbGlzdCBvZiBlbnRyaWVzIG9uIHRoZSBwYWdlLlxuXHRcdFx0XHQqL1xuXHRcdFx0XHRlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnkpIHtcblx0XHRcdFx0XHRjb250YWluZXIuYXBwZW5kKGVudHJ5VGVtcGxhdGUoZW50cnkpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKGNiKSB7XG5cdFx0XHRcdFx0Y2IoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGVycm9yOiBmdW5jdGlvbiAocmVzdWx0LCBzdGF0dXMsIGVycil7XG5cdFx0XHRcdC8vcnVuIG9ubHkgdGhlIGNhbGxiYWNrIHdpdGhvdXQgYXR0ZW1wdGluZyB0byBwYXJzZSByZXN1bHQgZHVlIHRvIGVycm9yXG5cdFx0XHRcdGlmIChjYikge1xuXHRcdFx0XHRcdGNiKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkYXRhVHlwZTogXCJqc29uXCJcblx0fSk7XG59XG5cbi8qIEdvb2dsZSBBUEk6IExvYWRzIHRoZSBGZWVkIFJlYWRlciBBUEkgYW5kIGRlZmluZXMgd2hhdCBmdW5jdGlvblxuKiB0byBjYWxsIHdoZW4gdGhlIEZlZWQgUmVhZGVyIEFQSSBpcyBkb25lIGxvYWRpbmcuXG4qL1xuZ29vZ2xlLnNldE9uTG9hZENhbGxiYWNrKGluaXQpO1xuXG4vKiBBbGwgb2YgdGhpcyBmdW5jdGlvbmFsaXR5IGlzIGhlYXZpbHkgcmVsaWFudCB1cG9uIHRoZSBET00sIHNvIHdlXG4qIHBsYWNlIG91ciBjb2RlIGluIHRoZSAkKCkgZnVuY3Rpb24gdG8gZW5zdXJlIGl0IGRvZXNuJ3QgZXhlY3V0ZVxuKiB1bnRpbCB0aGUgRE9NIGlzIHJlYWR5LlxuKi9cbiQoZnVuY3Rpb24oKSB7XG5cdHZhciBjb250YWluZXIgPSAkKCcuZmVlZCcpLFxuXHRcdFx0ZmVlZExpc3QgPSAkKCcuZmVlZC1saXN0JyksXG5cdFx0XHRmZWVkSXRlbVRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKCQoJy50cGwtZmVlZC1saXN0LWl0ZW0nKS5odG1sKCkpLFxuXHRcdFx0ZmVlZElkID0gMCxcblx0XHRcdG1lbnVJY29uID0gJCgnLm1lbnUtaWNvbi1saW5rJyk7XG5cblx0LyogTG9vcCB0aHJvdWdoIGFsbCBvZiBvdXIgZmVlZHMsIGFzc2lnbmluZyBhbiBpZCBwcm9wZXJ0eSB0b1xuXHQgKiBlYWNoIG9mIHRoZSBmZWVkcyBiYXNlZCB1cG9uIGl0cyBpbmRleCB3aXRoaW4gdGhlIGFycmF5LlxuXHQgKiBUaGVuIHBhcnNlIHRoYXQgZmVlZCBhZ2FpbnN0IHRoZSBmZWVkSXRlbVRlbXBsYXRlIChjcmVhdGVkXG5cdCAqIGFib3ZlIHVzaW5nIEhhbmRsZWJhcnMpIGFuZCBhcHBlbmQgaXQgdG8gdGhlIGxpc3Qgb2YgYWxsXG5cdCAqIGF2YWlsYWJsZSBmZWVkcyB3aXRoaW4gdGhlIG1lbnUuXG5cdCAqL1xuXHRhbGxGZWVkcy5mb3JFYWNoKGZ1bmN0aW9uKGZlZWQpIHtcblx0XHRcdGZlZWQuaWQgPSBmZWVkSWQ7XG5cdFx0XHRmZWVkTGlzdC5hcHBlbmQoZmVlZEl0ZW1UZW1wbGF0ZShmZWVkKSk7XG5cblx0XHRcdGZlZWRJZCsrO1xuXHR9KTtcblxuXHQvKiBXaGVuIGEgbGluayBpbiBvdXIgZmVlZExpc3QgaXMgY2xpY2tlZCBvbiwgd2Ugd2FudCB0byBoaWRlXG5cdCAqIHRoZSBtZW51LCBsb2FkIHRoZSBmZWVkLCBhbmQgcHJldmVudCB0aGUgZGVmYXVsdCBhY3Rpb25cblx0ICogKGZvbGxvd2luZyB0aGUgbGluaykgZnJvbSBvY2N1cnJpbmcuXG5cdCAqL1xuXHRmZWVkTGlzdC5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGl0ZW0gPSAkKHRoaXMpO1xuXG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ21lbnUtaGlkZGVuJyk7XG5cdFx0XHRsb2FkRmVlZChpdGVtLmRhdGEoJ2lkJykpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcblxuXHQvKiBXaGVuIHRoZSBtZW51IGljb24gaXMgY2xpY2tlZCBvbiwgd2UgbmVlZCB0byB0b2dnbGUgYSBjbGFzc1xuXHQgKiBvbiB0aGUgYm9keSB0byBwZXJmb3JtIHRoZSBoaWRpbmcvc2hvd2luZyBvZiBvdXIgbWVudS5cblx0ICovXG5cdG1lbnVJY29uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKCdtZW51LWhpZGRlbicpO1xuXHR9KTtcbn0oKSk7XG4iXX0=

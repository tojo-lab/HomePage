 $(document).on('click', '.panel_list a', function(e) {
     $(this).next('.panel_contents').slideToggle(500);
 });
 $(document).ready(function() {
     var panel_num = $('.panel_contents');
     if (document.URL.match("index.html|intro.html|member.html|thema.html|thesis.html|way.html")) {
         panel_num.eq(0).css('display', 'block');
     } else if (document.URL.match("beginning.html|proceed.html|symbol.html|outline.html")) {
         panel_num.eq(1).css('display', 'block');
     } else if (document.URL.match("lecture.html")) {
         panel_num.eq(2).css('display', 'block');
     } else if (document.URL.match("software-goto.html|software-nomura.html|software-hatano.html")) {
         panel_num.eq(3).css('display', 'block');
     } else if (document.URL.match("link.html|conference.html")) {
         panel_num.eq(4).css('display', 'block');
     };
 });
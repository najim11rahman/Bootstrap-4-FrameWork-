$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
$('#exampleModal').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget) // Button that triggered the modal
var recipient = button.data('whatever') // Extract info from data-* attributes
// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
var modal = $(this)
modal.find('.modal-title').text('Reserve a Table ' + recipient)
modal.find('.modal-body input').val(recipient)
})

//$(document).ready(function(){
    //$("#mycarousel").carousel( { interval: 2000 } );
    //$("#carousel-pause").click(function(){
        //$("#mycarousel").carousel('pause');
    //});
    //$("#carousel-play").click(function(){
        //$("#mycarousel").carousel('cycle');
    //});
//});

$("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
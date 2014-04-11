/**
 * Created by leah on 4/10/14.
 */
var form = $('.quickChange form');
//TODO ed fix this
//USE THIS: http://stackoverflow.com/questions/6688907/how-to-create-dynamic-variables-in-rails-function
//form.append('<%= j render(@policy) %>');
var formId = form.parent().attr('id');
var lis = form.find("ul li");
lis.first().replaceWith(
	lis.last().html()
).last().remove();
form.hide();
$("#new_"+ formId +"_link").show();
$(".edit_link").show();

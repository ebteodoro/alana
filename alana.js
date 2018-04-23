var title3 = document.getElementsByTagName("title")[0].innerHTML;
var ecos = title3.includes("EcoAtivos");
if(ecos == true){
		$( "#page-course-view-topics .content-header .heading" ).html( '<img class="img-responsive" style="margin: 0 auto; width:550px;" src="https://online.alana.org.br/pluginfile.php/32/course/section/1/logo_ecoativos.png" />' );
  }

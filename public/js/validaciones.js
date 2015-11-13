$(document).ready(function(){
	$("#ciudad-crear").validate({
		rules:{
			nombre:{
				required:true
			}
		}
	});
	$("#sala-crear").validate({
		rules:{
			identificador:{
				required:true
			},
			nombre:{
				required:true
			},
			direccion:{
				required:true
			},
			telefono:{
				required:true
			},
			ciudad:{
				required:true
			}
		}
	});
	$("#usuario-crear").validate({
		rules:{
			identificacion:{
				required:true
			},
			nombre:{
				required:true
			},
			apellido:{
				required:true
			},
			telefono:{
				required:true
			},
			username:{
				required:true
			},
			email:{
				required:true,
				email:true
			},
			password:{
				required:true
			},
			re_password:{
				required:true,
				equalTo: "#password"
			}
		}
	});
});
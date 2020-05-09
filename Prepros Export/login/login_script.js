new Vue({
 el: '#login_form',
 data (){
 	return{
 		email: '',
		password: '',
		repeatPassword: '',
		errorPass1:'',
		errorPass2: '',
		emptyPass1: '',
		emptyPass2: '',
		emptyEmail: '',
		youerrorPass1: '',
		youemptyPass1: '',
		youemptyEmail: '',
		youemail:'',
		youpassword:''
 	}
 },
 computed:{
 	isSubmitDisable(){
 		return Boolean(this.errorPass1 || this.errorPass2 || this.emptyPass1 || this.emptyPass2 || this.emptyEmail)
 	},
 	youisSubmitDisable(){
 		return Boolean(this.youerrorPass1 || this.youemptyPass1 || this.youemptyEmail) 
 	}
 },
 methods:{
 	handleSubmit(e){
 		e.preventDefault()
 		if(!this.isSubmitDisable){
 			console.log('Done')
 		}
 	},
 	handleInputPass1(e)
 	{
 		this.password = e.target.value
 		this.emptyPass1= !this.password ? 'Password area is empty' : ''
 		this.errorPass1 = this.password.length < 8 ? 'ERROR MIN 8' : ''
 	},
 	handleInputPass2(e)
 	{
 		this.repeatPassword = e.target.value
 		this.emptyPass2= !this.repeatPassword ? 'Password area is empty' : ''
 		this.errorPass2 = this.repeatPassword != this.password ? 'Password not match' : ''
 	},
 	handleInputEmail(e)
 	{
 		this.email = e.target.value
 		this.emptyEmail= !this.email ? 'Email area is empty' : ''
 	},
 	youhandleInputEmail(e)
 	{
 		this.youemail = e.target.value
 		this.youemptyEmail= !this.youemail ? 'Email area is empty' : ''
 	},
 	youhandleInputPass1(e)
 	{
 		this.youpassword = e.target.value
 		this.youemptyPass1= !this.youpassword ? 'Password area is empty' : ''
 		this.youerrorPass1 = this.youpassword.length < 8 ? 'ERROR MIN 8' : ''
 	}


 }

});

document.addEventListener('DOMContentLoaded', () => {

	const ajaxSend = (formData) => {
		fetch('mail.php', { // файл-обработчик 
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded', // отправляемые данные 
			},
			body: formData
		})
		.then(response => console.log('Сообщение отправлено методом fetch'))
		.catch(error => console.error(error))
	};

		const forms = document.getElementsByTagName('form');
	for (let i = 0; i < forms.length; i++) {
		forms[i].addEventListener('submit', function (e) {
			e.preventDefault();
				 const formData = new FormData(this);
				ajaxSend(formData);
				this.reset(); // очищаем поля формы 
		});
	};

});

function man(image, name, age, country, work, about){
	return{
		image, name, age, country, work, about
	}
}



const mans=[
	man('img/portret/1.jpg','Ivan', '15', 'Russia', 'participant', 'Lorem ipsum dolor sit amet, '),
	man('img/portret/2.jpg','Olga', '25', 'Russia', 'trainer', 'Lorem ipsum dolor sit amet, '),
	man('img/portret/3.jpg','Maria', '44', 'Russia', 'investor', 'Lorem ipsum dolor sit amet,'),
	man('img/portret/4.jpg','Oksana', '20', 'Russia', 'mentor', 'Lorem ipsum dolor sit amet,'),
	man('img/portret/5.jpg','Liza', '30', 'USA', 'participant', 'Lorem ipsum dolor sit amet, '),
	man('img/portret/6.jpg','Julia', '29', 'Russia', 'trainer', 'Lorem ipsum dolor sit amet, '),
	man('img/portret/7.jpg','Maria', '64', 'Ukraine', 'investor', 'Lorem ipsum dolor sit amet,'),
	man('img/portret/8.jpg','Dmitryi', '60', 'Russia', 'mentor', 'Lorem ipsum dolor sit amet,'),
	man('img/portret/9.jpg','Fedor', '55', 'Russia', 'participant', 'Lorem ipsum dolor sit amet, '),
	man('img/portret/10.jpg','Oleg', '50', 'Russia', 'trainer', 'Lorem ipsum dolor sit amet, '),
	man('img/portret/11.jpg','Franc', '67', 'China', 'investor', 'Lorem ipsum dolor sit amet,'),
	man('img/portret/12.jpg','Boris', '70', 'Russia', 'mentor', 'Lorem ipsum dolor sit amet,'),
	man('img/portret/13.jpg','Ivan', '75', 'Russia', 'participant', 'Lorem ipsum dolor sit amet, '),
	man('img/portret/14.jpg','Valera', '45', 'Russia', 'trainer', 'Lorem ipsum dolor sit amet, '),
	man('img/portret/15.jpg','Jon', '44', 'USA', 'investor', 'Lorem ipsum dolor sit amet,'),
	man('img/portret/16.jpg','James', '74', 'USA', 'investor', 'Lorem ipsum dolor sit amet,')
]



new Vue({
 el:'#list__section',

 data:{
 	mans:mans,
 	search: ''
 },
 computed:{
 	filterMans(){
 		var self=this
 		const filtered= this.mans.filter(function(man){
 			return man.name.indexOf(self.search)> -1 || man.age.indexOf(self.search)> -1|| man.work.indexOf(self.search)> -1 || man.country.indexOf(self.search)> -1
 		})
 		return filtered
 	}
 }
});
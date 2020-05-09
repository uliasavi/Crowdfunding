function project(title, image, name, about, poloska){
	return{
		title, image, name, about, poloska
	}
}



const projects=[
	project('First project','img/portret/1.jpg', 'Jon Doe', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ut minima asperiores excepturi expedita dicta maiores reprehenderit deleniti, reiciendis, repudiandae? Sed voluptate suscipit autem. Laudantium sequi sit, nisi, nostrum, est, beatae consequatur repellendus iste veniam distinctio et! Voluptatibus quibusdam nemo, reiciendis deserunt quas cumque, quis, ea rem recusandae assumenda libero.', '30'),
	project('Second project','img/portret/2.jpg', 'Liza', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam natus sed, eveniet praesentium laboriosam, voluptatibus rerum eum dolorum quas exercitationem quibusdam dignissimos, necessitatibus inventore quaerat nulla ullam. Ratione nostrum aut tempora id maiores, magni velit repellat libero autem tenetur placeat accusamus officia natus, nemo molestiae ea vero alias dolor maxime.', '50'),
	project('Third project','img/portret/3.jpg', 'Vova', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto odit animi quas eos eaque praesentium nisi impedit maiores. Quidem tempore blanditiis numquam odit at, aliquid dolores molestiae aut sequi voluptas eaque, adipisci. Ab perspiciatis odit, iste. Incidunt dolores nostrum, minima perspiciatis aut sunt voluptates eius, delectus accusamus, dicta illo dolor.', '70'),
	project('Fourth project','img/portret/4.jpg', 'Oleg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem recusandae optio, vel, sit excepturi nemo voluptatibus error consequatur praesentium deserunt alias iste fuga minima, deleniti repellat molestias est quasi quae quibusdam maxime sed iure sunt labore atque. Similique, ab assumenda accusantium quia et, fuga non unde laborum, ipsa, vel doloribus.', '20'),
	project('Fifth project','img/portret/5.jpg', 'Jon ', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam porro a fugiat dicta doloribus, quisquam alias nulla officia eius, neque consequatur sint cumque corrupti beatae? Natus veniam blanditiis nemo ipsum, nobis, dignissimos quam fuga, dolor fugiat ab est reiciendis qui cumque repellendus ut optio error at molestias pariatur velit quibusdam.', '100')

]



new Vue({
 el:'#proj',

 data:{
 	projects:projects,
 	project: projects[0],
 	selectedIndex: 0,
 	activeColor: projects[0].poloska
 },
 methods:{
 	selectProject: function(index){
 		console.log('ffff', index)
 		this.project= projects[index]
 		this.selectedIndex = index,
 		this.activeColor= projects[index].poloska
 	}
 }

});
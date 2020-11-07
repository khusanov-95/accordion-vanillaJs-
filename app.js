const item__headers = document.querySelectorAll('.item__header');
const item__contents = document.querySelectorAll('.item__content');

item__headers.forEach(item => {
  item.addEventListener('click', (e) => {

      item__headers.forEach(item => {
        if(item != e.target){item.classList.remove('item__header--active')} 
      });
      item__contents.forEach(item => {
        if(item != e.target.nextElementSibling){item.classList.remove('item__content--active')
      }
      });
     
      item.classList.toggle('item__header--active');
      item.nextElementSibling.classList.toggle('item__content--active');
    
  })
  
})
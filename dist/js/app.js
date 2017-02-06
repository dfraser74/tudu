function saveTasks(t,e,s){var i=JSON.parse(localStorage.getItem(dbName)),e=e||function(){},n=currentListInput.value;if(s){for(var a=i.tasks.length-1;a>=0;a--)if(i.tasks[a].id===s){for(var o in t)i.tasks[a][o]=t[o];break}localStorage.setItem(dbName,JSON.stringify(i)),e.call(this,i,n)}else t.id=(new Date).getTime().toString(),t.list=n,i.tasks.push(t),localStorage.setItem(dbName,JSON.stringify(i)),e.call(this,i,n)}function saveList(t,e,s){var i=JSON.parse(localStorage.getItem(dbName)),e=e||function(){},s=s||function(){},n=(new Date).getTime().toString(),a={id:n,name:t};i.lists.push(a),currentListInput.value=n;var o=currentListInput.value;listView.classList.add("listView-show"),localStorage.setItem(dbName,JSON.stringify(i)),e.call(this,i,o),s.call(this,i.lists)}function setDB(){var t={tasks:[],lists:[{id:"1",name:"Default"}]};t=JSON.stringify(t),localStorage.setItem(dbName,t)}function loadtasksList(){var t=JSON.parse(localStorage.getItem(dbName));showTask(t,"1"),showLists(t.lists)}function showTask(t,e){taskList.innerHTML="",taskListTitle.innerHTML="";for(var s,i=document.getElementById("current-list-view"),n=i.value,a=t.lists.length-1;a>=0;a--)if(t.lists[a].id===e){s=t.lists[a].name;break}listViewButtons.forEach(function(t){t.classList.remove("todoApp-listSection-actionButton-active")});var o=document.querySelector('.todoApp-listSection-actionButton[value="'+n+'"]');o.classList.add("todoApp-listSection-actionButton-active");var l=0;if(t.tasks.forEach(function(t){if(t.list===e){if("active"===n&&t.completed)return;if("completed"===n&&!t.completed)return;l++;var s=document.createElement("label");s.className="todoApp-list-item-label",s.appendChild(document.createTextNode(t.text));var i=document.createElement("input");i.className="todoApp-list-item-check",i.setAttribute("type","checkbox"),i.addEventListener("click",function(){completeTask(t)});var a=document.createElement("button");a.className="todoApp-list-item-destroy",a.addEventListener("click",function(){removeTask(t.id,showTask)});var o=document.createElement("li");o.id=t.id,o.className="todoApp-list-item",t.completed&&(o.classList.add("completed"),i.setAttribute("checked",!0)),o.appendChild(i),o.appendChild(s),o.appendChild(a),taskList.appendChild(o)}}),l<=0){var c=document.createTextNode("There is nothing here."),r=document.createElement("p");r.className="todoApp-list-message",r.appendChild(c),taskList.appendChild(r)}s=document.createTextNode(s),taskListTitle.appendChild(s)}function showLists(t){listsList.innerHTML="",t.forEach(function(t){var e=document.createTextNode(t.name),s=document.createElement("li");s.className="todoApp-listsList-item",s.id=t.id,s.appendChild(e),listsList.appendChild(s)});var e=listsList.querySelectorAll(".todoApp-listsList-item");e.forEach(function(t){t.addEventListener("click",function(){var t=this.id,e=JSON.parse(localStorage.getItem(dbName));currentListInput.value=t,mainNav.classList.remove("todoApp-mainNav-open"),listView.classList.add("listView-show"),showTask(e,t)})})}function addTask(t){var e={text:t,completed:!1,list:"1"},s=document.getElementById("current-list-view");s.value="active",saveTasks(e,showTask)}function completeTask(t){for(var e=JSON.parse(localStorage.getItem(dbName)),s=e.tasks.length-1;s>=0;s--)if(e.tasks[s].id===t.id){t.completed?t.completed=!1:t.completed=!0,saveTasks(t,showTask,t.id);break}}function removeTask(t,e){for(var s=JSON.parse(localStorage.getItem(dbName)),i=currentListInput.value,e=e||function(){},n=s.tasks.length-1;n>=0;n--)if(s.tasks[n].id===t){s.tasks.splice(n,1);break}localStorage.setItem(dbName,JSON.stringify(s)),e.call(this,s,i)}function clearList(t,e){for(var s=JSON.parse(localStorage.getItem(dbName)),i=currentListInput.value,e=e||function(){},n=s.tasks.length-1;n>=0;n--)s.tasks[n].list===t&&s.tasks.splice(n,1);localStorage.setItem(dbName,JSON.stringify(s)),e.call(this,s,i)}function removList(t,e){clearList(t,showTask);for(var s=JSON.parse(localStorage.getItem(dbName)),e=e||function(){},i=s.lists.length-1;i>=0;i--)if(s.lists[i].id===t){s.lists.splice(i,1);break}var n=currentListInput.value;localStorage.setItem(dbName,JSON.stringify(s)),e.call(this,s.lists,n)}var menuButton=document.getElementById("menu-button"),tasksInput=document.getElementById("new-task-input"),taskList=document.getElementById("task-list"),listsList=document.getElementById("lists-list"),saveListInput=document.getElementById("save-list-input"),openSaveListDialogButton=document.getElementById("open-savelist-dialog-button"),currentListInput=document.getElementById("current-list-input"),taskListTitle=document.getElementById("task-list-title"),mainNav=document.getElementById("main-nav"),mainNavContent=document.getElementById("main-nav-content"),saveListDialog=document.getElementById("save-list-dialog"),saveListDialogContent=document.getElementById("save-list-dialog-content"),cancelSaveListButton=document.getElementById("cancel-save-list-button"),saveListButton=document.getElementById("save-list-button"),listView=document.getElementById("list-view"),closeListViewButton=document.getElementById("close-list-view"),listViewButtons=document.querySelectorAll(".todoApp-listSection-actionButton"),listViewOptions=document.getElementById("list-view-options"),moreListOptionsButton=document.getElementById("more-list-options"),clearListButton=document.getElementById("clear-list"),deleteListButton=document.getElementById("delete-list"),dbName="tuduDB";tasksInput.addEventListener("focus",function(){this.parentElement.classList.add("todoApp-newTask-active")}),tasksInput.addEventListener("blur",function(){this.parentElement.classList.remove("todoApp-newTask-active")}),tasksInput.onkeyup=function(t){if(13==t.keyCode){var e=this.value.trim();""!==e&&(addTask(e),this.value="")}},saveListInput.onkeyup=function(){if(13==event.keyCode){var t=this.value.trim();""!==t&&(saveList(t,showTask,showLists),this.value="",saveListDialog.classList.remove("todoApp-dialogContainer-visible"))}},openSaveListDialogButton.addEventListener("click",function(t){t.stopPropagation(),saveListDialog.classList.add("todoApp-dialogContainer-visible")}),saveListDialogContent.addEventListener("click",function(t){t.stopPropagation()}),cancelSaveListButton.addEventListener("click",function(t){saveListInput.value="",saveListDialog.classList.remove("todoApp-dialogContainer-visible")}),saveListButton.addEventListener("click",function(){var t=saveListInput.value.trim();""!==t&&(saveList(t,showTask,showLists),saveListInput.value="",saveListDialog.classList.remove("todoApp-dialogContainer-visible"))}),document.body.addEventListener("click",function(){var t=document.getElementById("main-nav");t.classList.remove("todoApp-mainNav-open"),saveListDialog.classList.remove("todoApp-dialogContainer-visible"),listViewOptions.classList.remove("listView-options-show")}),mainNavContent.addEventListener("click",function(t){t.stopPropagation()}),menuButton.addEventListener("click",function(t){t.stopPropagation(),this.classList.toggle("todoApp-menuButton-open"),mainNav.classList.toggle("todoApp-mainNav-open")}),closeListViewButton.addEventListener("click",function(){listView.classList.remove("listView-show")}),listViewButtons.forEach(function(t){t.addEventListener("click",function(){var t=JSON.parse(localStorage.getItem(dbName)),e=this.value,s=currentListInput.value,i=document.getElementById("current-list-view");i.value=e,showTask(t,s)})}),moreListOptionsButton.addEventListener("click",function(t){t.stopPropagation(),listViewOptions.classList.toggle("listView-options-show")}),clearListButton.addEventListener("click",function(){var t=currentListInput.value;clearList(t,showTask)}),deleteListButton.addEventListener("click",function(){var t=currentListInput.value;listView.classList.remove("listView-show"),removList(t,showLists)}),"serviceWorker"in navigator&&(navigator.serviceWorker.register("./sw.js").then(function(t){console.log("Succsessfully regitered service worker",t)}).catch(function(t){console.warn("Error whilst registering service worker",t)}),navigator.serviceWorker.ready.then(function(t){console.log("Service worker ready")})),document.body.onload=function(){localStorage[dbName]||setDB(),loadtasksList()};
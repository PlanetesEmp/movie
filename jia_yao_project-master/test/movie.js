




//function makeList(event){
//	console.log(document.getElementById("movie_title").value);
//}
/*var forli=[0,1,2,3,4,5,6];
var licounter=0;
var str;
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class mttree{
	constructor() {
        this.head = null;
    }
    insert(data){
        var newNode=new Node(data);
        if(this.head==null){
            this.head=newNode;
        }else{this.insertNode(this.head,newNode);}

    }
    insertNode(node,newNode) {
        if (newNode.data < node.data) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }

        }
    }
returndata(node){
	    return node.data;
}
searchtitle(node,data){
        if(node.data===data){
            return node;}
        else if(data < node.data){
            console.log("we get here2");
            return this.searchtitle(node.left, data);}
        else if(data > node.data){
            console.log("we get here3");
            return this.searchtitle(node.right, data);}
        else if(node===null){
            console.log("we get here4");
            return null;}
    }
}*/
var movietitle=[];
var searchtitle=[];
var str;
window.ul;
window.title;

function searchbox() {
    var input, filter, ul, li, a, i;
    searchtitle=[];
    input = document.getElementById('myInput');
        for(i=0;i<movietitle.length;i++){
            if (movietitle[i].startsWith(input.value)) {
                searchtitle.push(movietitle[i]);}
        }
    ul = document.getElementById("searchlist").getElementsByTagName("li");
    for(i in ul) {
        if(searchtitle[i]==null){
            ul[i].innerHTML=" ";
        }else{
            ul[i].innerHTML ="<a href=\"#\" onclick=\"show1()\">"+searchtitle[i]+"</a>";}
    }
}
    d3.csv("data.csv").then(function (data) {
        /*var movietree= new mttree();
        data.forEach(function (d) {
            movietree.insert(d.title);
        })*/

        searchtitle = document.getElementById('myInput');
        data.forEach(function (d) {
            movietitle.push(d.title);
        })
        console.log(movietitle);

        /*
        movietree.searchtitle("Nobaaddy");
        console.log(forli);*/



        window.makeList = function(){
	    d3.select("#movie_list").selectAll("li").remove();
          //  title = d3.select("#myInput").property("value");
            console.log(title);

            var cluster = [];
            var titles = [];


            data.forEach(function(d){
                if (title == d.title){
                    cluster.push(d.cluster);
                }

            });

            var cluster_data = data.filter((d) => cluster.includes(d.cluster));



            d3.select("#movie_list")
              .selectAll("li")
              .data(cluster_data)
              .enter()
              .append("li")
              .text((d) => d.title);
        }
    });

function show1(){
ul = document.getElementById("searchlist").getElementsByTagName("li");
title=ul[0].innerHTML;
makeList();
}
function show2(){
ul = document.getElementById("searchlist").getElementsByTagName("li");
title=ul[1]].innerHTML;
makeList();
}
function show3(){
ul = document.getElementById("searchlist").getElementsByTagName("li");
title=ul[2]].innerHTML;
makeList();
}
function show4(){
ul = document.getElementById("searchlist").getElementsByTagName("li");
title=ul[3]].innerHTML;
makeList();
}
function show5(){
ul = document.getElementById("searchlist").getElementsByTagName("li");
title=ul[4]].innerHTML;
makeList();
}
function show6(){
ul = document.getElementById("searchlist").getElementsByTagName("li");
title=ul[5]].innerHTML;
makeList();
}
function show7(){
ul = document.getElementById("searchlist").getElementsByTagName("li");
title=ul[6]].innerHTML;
makeList();
}

#Front -end Techonologies


-CSS
-JavaScript
-Bootstrap Framework
-Angular Framework
-ReactJS
    

####Back end Technologies



-Node.js
        *epress.js
     	*nodemoon
	    *cors
		*dotemv
-PHP
-c#
-Python
-Java


###Databasess



-Mangob
-Myspl
-SQLite
-Firebase
-Postgresspel
-Oracle


##VCS(Source code Management)
	-Distributed VCS
               *Git,Mercurial
	-Remote(central) VCS
                *Github,Bitbucket
### Git
- git init
- git add filename
- git add file1 file2 file3
- git add . (or) git add --all
- git status
- git commit -m "readme.md and sample.html files are added"
- git config --globaluser.name"krishnachaithanya9550"
- git config --globaluser.email:krishnachaithanya9550@gmail.com"




# html:hyper text markup language
- there are three types:
* symantic element
	- headder,table,section,article,aside
* blocklevel element(occupy entire width of browser)
	- headding,paragraphs,div
	- text will start from new line
* intime elements
	- span
	- input
	- img
	- nav
 	- form 
	- text area
### Reference Links
- flatcoin (for downloading images)
- html color codes
- webaim(contrast checker)
- freesvg

### CSSS
- cascading- style sheets
- types of Css
   - Inline CSS
   - Internal CSS
   - External CSS
- Syntax of CSS
selector
{
   css properties
}



### selectors


* Simple selectors
  - universal(*)
  - By element name
  - Grouping selector(,)
  - Class selector
  - Id selector

* Combinators
  - Descendent selector ( )
  - Child selector(>)
  - Adjacent sibling selector(+)
  - General sibling selector(-)
* Attribute selector
* psuedo class selectors



### Box models
 * margin
 * border
 * padding
    - 10px - all sides
	- 10px 30px - 10px to top and bottom and 30px to left and right
	- 10px 30px 40px - 10px to top 30px to left and right snd 40px to bottom
	- 10px 30px 40px 50px(top right bottom right)
 * width and height
 1 rem=16px


# Grid System
 - sm(small devices)
 - md(medium devices)
 - lg(large devices)
 - xl(extra large devices)
* modals
* tables




### javascript(day 4)

* in 1995 "Brendon Eich" injtroduced javaScript(ES-262)
*javascript is loosly tupled and dynamic language
* it is a test-based programming languge and we can use in client-side and sever-side(Node.js) for dynamic web applications 
* ECHA(Es-6)
   - let & const
   - map()
   - arrow function
   - classes
* datatypes
   - number 
   - BigInt(2^53-1)
   - string
   - boolean
   - undefined
   - null
   - object
   - arrays
* variables
   - var
   - let
   - const
   - scope
     - function level---->var
     - block level----->let & const

   - redeclare--->var
   - redefine---->var,let
* typeof()
   - using before declaring a variable is called hoisting
* object
* to generate notifications
   - alert
   - prompt(input from user)
   - confirm
* console statements
   - console.log()
   - console.info()
   - console.warn()
   - console.error()
* spread operator
   '''
       ...variablename 
   '''
   -to change array element from one array to another array
* Rest  parameter
   -to handle function parameter
   ''''
         ...parameter
   '''
* Destruction
   - Destructuring of an array
   - Desturcturing of an objects



* Functions
 
   - Function with functionname

   - functiondemo(x,y){
      return x+y;
   }
   demo()

- let demo = function(x,y){
    return x+y;
 }
 console.log(demo(2,3))
 .........

- let demo=(x,y)=>{
    return x*y
}
console.log(demo(2,3))

- setTimeout(function(){
    console.log("welcome")

},300)


* for loop
- 
 let employee=["R","C","B","M","I","C","S","k"]
 for(let i=0;i<employee.length;i++){
     console.log(employee[i])
 }

 * for in
 * for of



* Arrow functuion
* map function




### reactjs
   
 
 - it is a library
 - it follows architecture and components
      - class components 
      - functionn components
      - pure components
      - higher order components
* it provides virtual DOM
* unidirectional data fllow 
* single page applicatrions
* Prioject Environmental setup 



### props
   - to pass data from one component to another component we will use props
   - props are imutable
+ Union Bank(functional)
   - AndhraBank(Function)
   - Cooperation Bank(class)



+ states
   - in react to maintain information we use states
   - we can maintain states in claa components only(befor react16.8 version)
   ...........


   constructor(){
      super();
      this.state={


      }
   }




* to update the state informatin in class component we use 'setState()'
* to update the informatin in class component we have to follow component lifecycle methods
     - componentwillMount
     - componentdidMount
     - componentshouldUpdate
     - componentwillUpdate
     - componentDidUpdate
     - componentwillUnmount




### Hooks


    - from react 16.8 Hooks are introduced

- parent - child1 --> child2 --> child3
- 'useState()'
- 'useEffect()'
- 'useMemo()'
- 'useRef()'



### ListRendering


### Form handelling and Event handelling


     - [download visualstudio code](https://code.visualstudio.com/download)
     - [DownloadnodeJs](https://nodejs.org/en/download/)
     - instal nodejs and check versions of 'node' nad 'nmp'
       - 'node -v'
       - 'nmp -v'
    - 'webpack' and 'babel'
    - create-react-app'
         - 'nmp install create-react-app'
             --create-react-app projectname

   - indexPage
      - nav.js
      - body.js
      - footer.js
   * Login.js
   * Register
   * login
   * contact  
     

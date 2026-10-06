import Header from "./components/Header"
import Footer from "./components/Footer"
import Product from "./components/Product"
import { courses } from "./data/courses"


function App() {
  
  return (
    <div className="container">

      {/* Header */}
     
      <Header/>
      
    <section className="product">
      {/* Products */}
      {/* <Product title="Benten" p="jg c icecream" price="30$" img="c1.png"/>
      
      <Product title="Angry Bird" p="hfbhvye rfu" price="80$" img="c1.png"/>
      <Product title="Angry Bird" p="hfbhvye rfu" price="80$" img="c1.png"/>
      <Product title="Angry Bird" p="hfbhvye rfu" price="80$" img="c1.png"/> */}
      
       {
          courses.map((course) => (
            <Product
              title={course.title}
              p={course.description}
              price={course.price}
              img={course.img}
              soldout={course.soldout}
            />
          ))
        }

    </section>

      {/* Footer */}
      <Footer/>

    

    </div>
  )
}

export default App
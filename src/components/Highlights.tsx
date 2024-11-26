
interface MenuItemProps {
  name: string;
  price: number | string; // Assuming price can be either a number or a formatted string
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="w-full h-40 bg-blue-200 rounded-md mb-4"></div>
    <h3 className="text-xl font-semibold text-blue-900 mb-2">{name}</h3>
    <p className="text-blue-700">{price}</p>
  </div>
);



export default function Highlights(){
    return(<section id="menu" className="py-20 bg-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Menu Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Cappuccino", price: "$4.50" },
              { name: "Latte", price: "$4.00" },
              { name: "Espresso", price: "$3.00" },
              { name: "Mocha", price: "$4.75" }
            ].map((item, index) => (
              <MenuItem key={index} name={item.name} price={item.price} />
            ))}
          </div>
          <div className="text-center mt-12">
            
          </div>
        </div>
      </section>
      )
}
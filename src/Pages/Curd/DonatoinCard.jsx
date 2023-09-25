const DonatoinCard = ({ card }) => {
  const { id,image, category_description, title, Donate, } = card || {};
  const handelAddDonaite = () => {
    const addedDonaiteArray = [];
    const donatoinIteam = JSON.parse(localStorage.getItem("donaite"));

    if (!donatoinIteam) {
      addedDonaiteArray.push(card);
      localStorage.setItem("donaite", JSON.stringify(addedDonaiteArray));
      alert("product added");
    } else {
      const isExits = donatoinIteam.find((card) => card.id === id);
      if (!isExits){
          addedDonaiteArray.push(...donatoinIteam, card);
      localStorage.setItem("donaite", JSON.stringify(addedDonaiteArray));
      alert("product added");
      }
      else {
       console.log('alredy ase');
      }
     
    }
    // console.log(donatoinIteam);
    // console.log(card);
    // localStorage.setItem('test',JSON.stringify([{name:'shah'},{names:'israil'}]))
  };

  return (
    <div>
      <div className="relative container mx-auto">
        <div className="relative w-[70%] h-[70vh] mx-auto">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt=""
          />
          <div
            className="absolute p-5 bottom-0 left-0 w-full"
            style={{ background: "rgba(11, 11, 11, 0.50)" }}
          >
            <button onClick={handelAddDonaite} className="btn">
              Donate{Donate}
            </button>
          </div>
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-lg">{category_description}</p>
        </div>
      </div>
    </div>
  );
};

export default DonatoinCard;

function AddNewPhoto({ handler }) {
  return (
    <button
      className="uppercase text-sky-700 underline underline-offset-2"
      onClick={(e) => {
        e.preventDefault();
        handler();
      }}
    >
      Adicionar mais uma foto
    </button>
  );
}

export default AddNewPhoto;

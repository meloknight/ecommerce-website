export default function ProductCard(props: any) {
  return (
    <>
      <button className={`${props.cardType}-product-card`}>
        <div className={`${props.cardType}-card-top-container`}>
          <img src={props.productImage} alt={props.productName} />
        </div>
        <div className={`${props.cardType}-card-bottom-container`}>
          <h3>{props.productName}</h3>
          <h2>${props.productPrice}</h2>
        </div>
      </button>
    </>
  );
}

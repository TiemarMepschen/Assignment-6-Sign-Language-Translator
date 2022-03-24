const charToSign = (char, index) => {
    return (
      <img
        className="sign"
        key={index}
        src={require(`../LostInTranslation_Resources/individual_signs/${char}.png`)}
        alt={`Hand sign for ${char}`}
      />
    );
  };
  
  const isAlpha = (char) => {
    // If the lowercase and uppercase version of the character are different, then it must be in the (latin) alphabet.
    return char.toLowerCase() !== char.toUpperCase();
  };
  
  const translateToSign = (sentence) => {
    return sentence
      .toLowerCase()
      .split("")
      .filter((char) => isAlpha(char))
      .map((char, index) => charToSign(char, index));
  };

  export default translateToSign
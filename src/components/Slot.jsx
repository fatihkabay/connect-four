import redToken from "../assets/redtoken.png";
import blackToken from "../assets/blacktoken.png";

import React from "react";

function Slot({ch, y, x}) {
  return <div className="slot">
    {ch && (
        <img src={ch === 'X' ? redToken : blackToken} width='100%' height='100%' />
    )}
  </div>;
}

export default Slot;

import react, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { confirmAlert } from 'react-confirm-alert';

const Passgen = () => {
  const specialCharaters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChar = lowerCaseChars.toLocaleLowerCase();
  const num = "0123456789";
  const [password, setpassword] = useState();

  const generatePassword = () => {
    alert("Pick a criteria");
    let newPassword = "";
    let possibleChar = "";
    const characterPromot = prompt(
      "select a length of at least 8 characters and no more than 128 characters"
    );
    if (characterPromot >= 8 && characterPromot <= 128) {
      const spCharQ = window.confirm("do want special charachters");
      if (spCharQ === true) {
        const pos = Math.floor(Math.random() * specialCharaters.length);
        newPassword = newPassword + specialCharaters.charAt(pos);
        possibleChar = possibleChar + specialCharaters;
      }
      const lowercharQ = window.confirm("do you want lowercase character ");
      if (lowercharQ === true) {
        const pos = Math.floor(Math.random() * lowerCaseChars);
        newPassword = newPassword + lowerCaseChars.charAt(pos);
        possibleChar = possibleChar + lowerCaseChars;
      }

      if (newPassword.length > 0) {
        const restChar = characterPromot - newPassword.length;

        for (let index = 0; index < restChar; index++) {
          const pos = Math.floor(Math.random() * possibleChar.length);
          newPassword = newPassword + possibleChar.charAt(pos);
        }
      }
    }
    setpassword(newPassword);
  };

  return (
    <div>
      <Card>
        <Card.Header>Password Generator 30000</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            <textarea
              readOnly
              //  writepaas={writePassword}
              // id="password"
              defaultValue={password}
              placeholder="Your Secure Password"
              aria-label="Generated Password"
            ></textarea>
          </Card.Text>
          <Button variant="primary" onClick={generatePassword}>
            Generate
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Passgen;

// const Passgen = () => {
//   const specialChars = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//   const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
//   const upperChars = lowerCaseChars.toUpperCase();
//   const numberChars = "0123456789";
//   const [password, setPassword] = useState("");

//   const generateBtn = () => {
//     alert("Please select length of password");
//     let newPassword = "";
//     let possibleChar = "";
//     const passwordPromt = prompt(
//       "select a length of at least 8 characters and no more than 128 characters "
//     );
//     if (passwordPromt >= 8 && passwordPromt <= 128) {
//       const spChar = window.confirm("Do want a special character?");
//       if (spChar === true) {
//         const pos = Math.floor(Math.random() * specialChars.length);
//         newPassword = newPassword + specialChars.charAt(pos);
//         possibleChar = possibleChar + specialChars;
//       }
//       const lowerChar = window.confirm("Do want a lower case?");
//       if (lowerCaseChars === true) {
//         const pos = Math.floor(Math.random() * lowerCaseChars);
//         newPassword = newPassword + lowerCaseChars.charAt(pos);
//         possibleChar = possibleChar + lowerCaseChars;
//       }
//       const upperChar = window.confirm("Do want a upper case?");
//       if (upperChar === true) {
//         const pos = Math.floor(Math.random() * upperChars);
//         newPassword = newPassword + upperChars.charAt(pos);
//         possibleChar = possibleChar + upperChars;
//       }
//       const numbChar = window.confirm("Do want a number?");
//       if (numbChar === true) {
//         const pos = Math.floor(Math.random() * numberChars);
//         newPassword = newPassword + numberChars.charAt(pos);
//         possibleChar = possibleChar + numberChars;
//       }
//       if (newPassword.length > 0) {
//         const restChar = passwordPromt - newPassword.length;
//         for (let index = 0; index < restChar; index++) {
//           const pos = Math.floor(Math.random() * possibleChar.length);
//           newPassword = newPassword + possibleChar.charAt(pos);
//         }
//       }
//     }
//     console.log(newPassword);
//     setPassword(newPassword);

//   };
//   const writePassword = (e) => {
//     let readText = e.target.value;
//     readText = "";
//     const password = generateBtn();
//     if (password.length > 0) {
//       readText = password;
//     }
//   };

//   return (
//     <div>
//       <Card>
//         <Card.Header>Password Generator 30000</Card.Header>
//         <Card.Body>
//           <Card.Title>Special title treatment</Card.Title>
//           <Card.Text>
//             <textarea
//               readOnly
//               //  writepaas={writePassword}
//               // id="password"
//               defaultValue={password}
//               placeholder="Your Secure Password"
//               aria-label="Generated Password"
//             ></textarea>
//           </Card.Text>
//           <Button variant="primary" onClick={generateBtn}>
//             Generate
//           </Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };
// export default Passgen;

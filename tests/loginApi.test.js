import fetch from "node-fetch";

it("Should get a login token", async () => {
  //async allow us to read from the database by moving on and coming back

  const loginResponse = await fetch("https://dev.stedi.me/login", {
    //await fetch allows it to move on while getting data
    method: "POST", //method : POST says to give infromation to the server
    headers: {
      "Content-Type": "application/text",
    },

    body: JSON.stringify({
      userName: "digimon03@yahoo.com",
      password: "Winter2023!",
    }),
  });
  expect(loginResponse.status).toBe(200); //200 means authorized
});

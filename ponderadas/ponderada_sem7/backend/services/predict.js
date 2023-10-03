const util = require("util");
const { exec } = require("child_process");
const fs = require("fs");

const execPromise = util.promisify(exec);

const predictCustomers = async (data) => {
  fs.writeFileSync("services/customer_input.json", JSON.stringify(data));

  try {
    console.log('uuuuu')
    const { stdout, stderr } = await execPromise("python services/customer_predict.py");
    
    const customerPredictions = fs.readFileSync("services/exit.txt", "utf-8");
    console.log(customerPredictions)
    return customerPredictions;
  } catch (error) {
    console.error(`Erro: ${error.message}`);
    throw new Error("Algo deu errado");
  }
};

module.exports = {
  predictCustomers,
};

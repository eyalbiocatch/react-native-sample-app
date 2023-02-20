import BioCatch from "react-native-biocatch";

export const BCStart = async (
  serverURL,
  customerId,
  customerSessionId,
  enableHybridSolution
) => {
  console.log("in BCStart");
  try {
    return await BioCatch.start(
      serverURL,
      customerId,
      customerSessionId,
      enableHybridSolution
    );
  } catch (error) {
    console.log(`error: ${error}`);
    return error;
  }
};

export const BCSetLogLevel = async (logLevel) => {
  console.log("in BCSetLogLevel");
  try {
    return await BioCatch.setLogLevel(logLevel);
  } catch (error) {
    console.log(`error: ${error}`);
    return error;
  }
};

export const BCChangeContext = async (contextName) => {
  console.log("in BCChangeContext");
  try {
    return await BioCatch.changeContext(contextName);
  } catch (error) {
    console.log(`error: ${error}`);
    return error;
  }
};

export const BCUpdateCustomerSessionID = async (customerSessionID) => {
  console.log("in BCUpdateCustomerSessionID");
  try {
    return await BioCatch.updateCustomerSessionID(customerSessionID);
  } catch (error) {
    console.log(`error: ${error}`);
    return error;
  }
};

export const BCLogLevel = {
  DEBUG: 1,
  INFO: 2,
  WARNING: 3,
  ERROR: 4,
  FATAL: 5,
  VERBOSE: 6,
};

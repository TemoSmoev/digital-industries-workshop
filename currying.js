// one of the usecases of carrying

const convert = (type, data) => {
  // converting logic
};

const createConverter = (type) => {
  return (data) => {
    convert(type, data);
  };
};

const convertToJson = createConverter("json");
const convertToXML = createConverter("xml");
const convertToYaml = createConverter("yaml");

convertToJson({ a: "hello world", b: "adfadf" });

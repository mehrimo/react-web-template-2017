import example from './example_api'

const API = (() => {

  const groups = {};

  const apiGroups = [
    example,
  ];

  apiGroups.map(api => {
    const apiGroup = new api();
    const apiGroupName = apiGroup.name;
    if(!apiGroupName){
      throw new Error('Api apiGroup missing required "name" property');
    }
    groups[apiGroupName] = apiGroup;
  });

  return groups
})();

export default API

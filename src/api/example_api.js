import ApiGroup from './ApiGroup'

export default class exampleAPI extends ApiGroup {
  constructor(){
    super({
      name: 'example'
    });
  }

  getData = () => (
    this.get(`/data`)
  );

  postData = (data) => (
    this.post({
      endpoint: `/data`,
      data,
    })
  );

}
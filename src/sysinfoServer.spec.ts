import { getSystemInformation } from "./sysinfoServer";
// import ISystemInformation from './interfaces';

describe('typeScript test suite', () => {
  it('should return json', () => {
    const systemInformation = getSystemInformation();
    expect.assertions(1);
    // expect(getSystemInformation()).toBe(ISystemInformation);
    expect(systemInformation).toHaveProperty('cpu');
    expect(systemInformation).toHaveProperty('system');
    expect(systemInformation).toHaveProperty('mem');
    expect(systemInformation).toHaveProperty('os');
    expect(systemInformation).toHaveProperty('currentLoad');
    expect(systemInformation).toHaveProperty('processes');
    expect(systemInformation).toHaveProperty('diskLayout');
    expect(systemInformation).toHaveProperty('networkInterfaces');
  });
});

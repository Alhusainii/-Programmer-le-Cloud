const si = require('systeminformation');
import ISystemInformation from './interfaces';

export const getSystemInformation = async () => {
  const [
    cpu,
    system,
    mem,
    os,
    currentLoad,
    processes,
    diskLayout,
    networkInterfaces,
  ] = await Promise.all([
    si.cpu(),
    si.system(),
    si.mem(),
    si.osInfo(),
    si.currentLoad(),
    si.processes(),
    si.diskLayout(),
    si.networkInterfaces(),
  ]);

  return {
    cpu,
    system,
    mem,
    os,
    currentLoad,
    processes,
    diskLayout,
    networkInterfaces,
  };

  // const sysinfo: ISystemInformation  = {
  //   cpu: si.cpu(),
  //   system: si.system(),
  //   mem: si.mem(),
  //   os: si.osInfo(),
  //   currentLoad: si.currentLoad(),
  //   processes: si.processes(),
  //   diskLayout: si.diskLayout(),
  //   networkInterfaces: si.networkInterfaces(),
  // };

  // return sysinfo;
  // return si.cpu();
}
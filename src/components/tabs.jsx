import { Tabs } from 'antd';
function TabProduct() {
    const items = [
        {
          key: '1',
          label: 'GAME',
          children: 'd',
        },
      ];
      const onChange = (key) => {
        console.log(key);
      };
  return (
    <>
         <Tabs
           defaultActiveKey="1"
           items={items}
           className='text-white bg-transparent'
           onChange={onChange}
         />
    </>
  )
}

export default TabProduct
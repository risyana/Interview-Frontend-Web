import { Table, Tag } from 'antd';

const columns = [
  {title: 'ID', dataIndex: 'id', key: 'id' },
  {title: 'Category', dataIndex: 'category', key: 'category' },
  {title: 'Title', dataIndex: 'title', key: 'title' },
  {title: 'Description', dataIndex: 'description', key: 'description' },
  {title: 'Footer', dataIndex: 'footer', key: 'footer' },
  {title: 'Tags', dataIndex: 'tags', key: 'tags',
    render:(text, record) => (
      <ul>
        {(record.tags && record.tags.length > 0) && record.tags.map(tag => (
          <li key={tag}>
            <Tag color="blue" >
              {tag}
            </Tag>
          </li>
        ))}
      </ul>
    )
  }
];

export default function q1({data}) {
  return (
    <>
      <h2 style={{textAlign: 'left'}}>    
        Question 1
      </h2>
      <Table pagination={{defaultPageSize: 5, position:['bottom', 'left']}} columns={columns} dataSource={data} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://screening.moduit.id/frontend/web/question/one')
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}
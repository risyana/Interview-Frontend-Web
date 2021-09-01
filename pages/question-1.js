import { Table, Tag } from 'antd';

const columns = [
  {title: 'id', dataIndex: 'id', key: 'id' },
  {title: 'category', dataIndex: 'category', key: 'category' },
  {title: 'title', dataIndex: 'title', key: 'title' },
  {title: 'description', dataIndex: 'description', key: 'description' },
  {title: 'footer', dataIndex: 'footer', key: 'footer' },
  {title: 'tags', dataIndex: 'tags', key: 'tags',
    render:(text, record) => (
      <>
        {(record.tags && record.tags.length > 0) && record.tags.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    )
  }
];

export default function q1({data}) {
  return (
    <>
      <p>    
        Question 1
      </p>
      <Table columns={columns} dataSource={data} scroll={{ y: 600 }} />
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
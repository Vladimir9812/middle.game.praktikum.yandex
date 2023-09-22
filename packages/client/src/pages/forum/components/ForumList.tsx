import { Box, Button, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Icons, Modal, Pagination } from '@app/components';
import { dateFormat } from '@app/utils';

import styles from '../Forum.module.css';
import mock from '../mock.json';

import { CreateTopic } from './CreateTopic';
import { GridColumnTemplate } from './GridColumnTemplate';

type GridItemType = {
  id: number | string /* пока что добавляю string для создания топика */;
  name: string;
  dateOfCreate: Date | string;
  commentsCount: number;
};

const titleItemList = ['Themes', 'Date', 'Comments', ''];
const itemsPerPage = 5;

export function ForumList() {
  const [data, setData] = useState(mock.data.allTheme);
  const [rowItemList, setRowItemList] = useState<GridItemType[]>([]);
  const [itemOffset, setItemOffset] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const endOffset = itemOffset + itemsPerPage;
  const paginatedItems = rowItemList.slice(itemOffset, endOffset);

  useEffect(() => {
    const sortedList = data.sort((a, b) => b.dateOfCreate.localeCompare(a.dateOfCreate));
    setRowItemList(sortedList);
  }, [data]);

  const deleteRowItem = (id: number | string) => {
    const itemIndex = data.findIndex((it) => it.id === id);
    const newData = [...data];
    newData.splice(itemIndex, 1);
    setData(newData);
  };

  const onConfirm = (newItem: any) => {
    const newData = [...data];
    newData.push(newItem);
    setData(newData);
    onClose();
  };

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % rowItemList.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Flex justifyContent="center" w="100%">
        <Button
          leftIcon={<Icons.CreateItemIcon />}
          variant="solid"
          colorScheme="teal"
          className={styles.newtopic}
          color="initial"
          size="md"
          onClick={onOpen}
        >
          New topic
        </Button>
      </Flex>
      <Box className={styles.forumlist}>
        <Box className={styles.forumlist_header}>
          <GridColumnTemplate isTitle itemList={titleItemList} />
        </Box>
        {paginatedItems.map((item) => (
          <GridColumnTemplate
            isTitle={false}
            key={dateFormat(item.dateOfCreate)}
            itemList={[
              item.name,
              dateFormat(item.dateOfCreate),
              item.commentsCount,
              <IconButton
                aria-label="delete thread"
                icon={<Icons.TrashItemIcon />}
                onClick={() => deleteRowItem(item.id)}
              />,
            ]}
          />
        ))}
      </Box>
      <Pagination
        dataLength={rowItemList.length}
        handlePageClick={handlePageClick}
        itemsPerPage={itemsPerPage}
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        body={<CreateTopic onClose={onClose} onConfirm={onConfirm} />}
        title="New topic"
      />
    </>
  );
}

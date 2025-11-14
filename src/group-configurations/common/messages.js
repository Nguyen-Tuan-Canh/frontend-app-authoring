import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  titleId: {
    id: 'course-authoring.group-configurations.container.title-id',
    defaultMessage: 'ID: {id}',
    description: 'Nội dung tiêu đề của một container trong phần cấu hình nhóm',
  },
  accessTo: {
    id: 'course-authoring.group-configurations.container.access-to',
    defaultMessage: 'Nhóm này kiểm soát quyền truy cập tới:',
    description: 'Cho biết các đơn vị nội dung được bao trong nhóm nội dung',
  },
  experimentAccessTo: {
    id: 'course-authoring.group-configurations.experiment-card.experiment-access-to',
    defaultMessage: 'Cấu hình nhóm này được sử dụng trong:',
    description: 'Cho biết các đơn vị nội dung được bao trong cấu hình thử nghiệm',
  },
});

export default messages;

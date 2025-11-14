import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  upstreamLinkOk: {
    defaultMessage: 'Mục này đang được liên kết với một mục trong thư viện.',
    id: 'upstream-icon.ok',
    description: 'Gợi ý và nhãn ARIA cho biểu tượng upstream khi liên kết hợp lệ.',
  },
  upstreamLinkError: {
    defaultMessage: 'Liên kết tới mục trong thư viện đã bị lỗi.',
    id: 'upstream-icon.error',
    description: 'Gợi ý và nhãn ARIA cho biểu tượng upstream khi liên kết bị lỗi.',
  },
});

export default messages;

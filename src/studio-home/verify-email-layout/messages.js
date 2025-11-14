import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.studio-home.verify-email.heading',
    defaultMessage: 'Cảm ơn bạn đã đăng ký, {username}!',
  },
  bannerTitle: {
    id: 'course-authoring.studio-home.verify-email.banner.title',
    defaultMessage: 'Chúng tôi cần xác minh địa chỉ email của bạn',
  },
  bannerDescription: {
    id: 'course-authoring.studio-home.verify-email.banner.description',
    defaultMessage:
      'Sắp xong rồi! Để hoàn tất đăng ký, chúng tôi cần bạn xác minh địa chỉ email ({email}). Một email kích hoạt và hướng dẫn tiếp theo đang chờ bạn trong hộp thư đó.',
  },
  sidebarTitle: {
    id: 'course-authoring.studio-home.verify-email.sidebar.title',
    defaultMessage: 'Cần trợ giúp?',
  },
  sidebarDescription: {
    id: 'course-authoring.studio-home.verify-email.sidebar.description',
    defaultMessage:
      'Vui lòng kiểm tra thêm thư mục Junk hoặc Spam nếu không thấy email của chúng tôi trong Hộp thư đến. Nếu vẫn không tìm thấy email xác minh, hãy yêu cầu hỗ trợ qua liên kết bên dưới.',
  },
});

export default messages;

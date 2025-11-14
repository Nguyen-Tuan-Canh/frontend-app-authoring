import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  rerunCourseDescription: {
    id: 'course-authoring.course-rerun.form.description',
    defaultMessage: 'Cung cấp thông tin nhận diện cho lần chạy lại (re-run) của khóa học này. Khóa học gốc sẽ không bị ảnh hưởng bởi lần chạy lại. {strong}',
  },
  rerunCourseDescriptionStrong: {
    id: 'course-authoring.course-rerun.form.description.strong',
    defaultMessage: 'Lưu ý: Tên tổ chức, mã khóa học và đợt mở khóa học (course run) kết hợp với nhau phải tạo thành một khóa học mới được nhận diện duy nhất.',
  },
});

export default messages;

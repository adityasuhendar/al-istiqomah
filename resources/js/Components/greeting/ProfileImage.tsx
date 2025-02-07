const ProfileImage = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-4">
            <img
                src="/images/foto-kepala-sekolah.jpg"
                alt="Kepala Sekolah"
                className="h-48 w-48 overflow-hidden rounded-full object-cover object-top shadow-xl"
            />
            <h3 className="text-lg font-bold text-color-primary md:text-2xl">
                Sutikno, S.Pd
            </h3>
        </div>
    );
};

export default ProfileImage;

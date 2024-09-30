import './gallery.css';
import { useState } from 'react';
import { CiImageOn } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight, FaTimes, FaPlay } from "react-icons/fa";
import img1 from '../content/Image Sequence_015_0004.jpg';
import img2 from '../content/Image Sequence_007_0000.jpg';
import img3 from '../content/Image Sequence_013_0035.jpg';
import img4 from '../content/Image Sequence_006_0242.jpg';
import img5 from '../content/Image Sequence_004_0034.jpg';
import vid from '../content/VID-20240909-WA0005.mp4';

const items = [
    { type: 'image', src: img1 },
    { type: 'image', src: img2 },
    { type: 'image', src: img3 },
    { type: 'image', src: img4 },
    { type: 'image', src: img5 },
    { type: 'video', src: vid }
];

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalItemIndex, setModalItemIndex] = useState(0);
    const itemsToShow = 2; 

    const handleNext = () => {
        if (currentIndex + itemsToShow < items.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex - 1 >= 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const openModal = (index) => {
        setModalItemIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalNext = () => {
        if (modalItemIndex + 1 < items.length) {
            setModalItemIndex(modalItemIndex + 1);
        }
    };

    const handleModalPrev = () => {
        if (modalItemIndex - 1 >= 0) {
            setModalItemIndex(modalItemIndex - 1);
        }
    };

    return (
        <div className='gallery'>
            <div className='gallery-content'>
                <div className="intro">
                    <div className="start">
                        <CiImageOn size={60} />
                        <div>Images & Videos</div>
                    </div>
                    <div className='end'>
                        <button onClick={handlePrev}>Previous</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
                <div className="images">
                    <div
                        className="image-list"
                        style={{ transform: `translateX( -${currentIndex * (100 / itemsToShow)}%)` }}
                    >
                        {items.map((item, index) => (
                            <div key={index} className="image-item" onClick={() => openModal(index)}>
                                {item.type === 'image' ? (
                                    <img src={item.src} alt={`Item ${index}`} />
                                ) : (
                                    <div className="video-thumbnail">
                                        <video src={item.src} alt={`Item ${index}`} />
                                        <FaPlay className="play-icon" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <FaTimes className="close" onClick={closeModal} size={50} />
                        <FaArrowLeft className="modal-prev" onClick={handleModalPrev} size={50} />
                        {items[modalItemIndex].type === 'image' ? (
                            <img src={items[modalItemIndex].src} alt={`Item ${modalItemIndex}`} />
                        ) : (
                            <video src={items[modalItemIndex].src} controls autoPlay />
                        )}
                        <FaArrowRight className="modal-next" onClick={handleModalNext} size={50} />
                        <div className="image-number">{modalItemIndex + 1} / {items.length}</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;

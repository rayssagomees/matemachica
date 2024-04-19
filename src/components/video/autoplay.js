const autoplay = document.getElementById('math-tuto');

autoplay.addEventListener('click', play);

function play(evt){
    evt.currentTarget.removeEventListener('click', play);
    evt.currentTarget.innerHTML = `<iframe src="https://www.youtube.com/embed/${evt.currentTarget.dataset.id}?si=_9SIiwe_mmGW_9bh&amp;controls=1&rel=0&autoplay=1&color=white&fs=0&iv_load_policy=3&modestbranding=1&showinfo=0" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}
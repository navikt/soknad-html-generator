#!/bin/bash
scriptdir="$(dirname "$0")"
cd "$scriptdir"

case "$1" in
    "test")
        (
            set -e
            docker-compose pull
            docker-compose -p "$2" up -d chrome
            docker-compose -p "$2" run --rm gemini test
            docker-compose -p "$2" down
        )
        errorCode=$?
        if [ $errorCode -ne 0 ]; then
            docker-compose -p "$2" down
            docker run --rm -v `pwd`/reports:/upload/files navikt/docker-directory-uploader:1.0.0 https://repo.adeo.no/repository/raw/nais/soknad-html-generator/"$2"
            echo "Se feilrapport fra Gemini på https://repo.adeo.no/repository/raw/nais/soknad-html-generator/$2/gemini/index.html"
            exit $errorCode
        fi
        ;;
    "capture")
        docker-compose run --rm gemini capture
        docker-compose down
        ;;
esac

#!/bin/sh

if grep -Eo '[0-9]{11}' './oppsummering.json'; then
  echo 'Det ser ut som du er på vei til å commite et fødselsnummer!'
  exit 1
fi